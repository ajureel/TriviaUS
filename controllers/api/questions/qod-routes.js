const router = require("express").Router();
const {QoD} = require('../../../models');
const date = require('date-and-time'); //eables us to compare dates
const fetch = require('node-fetch'); //enables us to fetch from 3rd party apis
//I think we can delete this next line
// const { res } = require("date-and-time"); 

const today = new Date();

// new promise will go inside of router
// get our latest question and determine if it is from today or not
// returns latest question or 'new' if a new question is needed
// output is used by newQoDPromise which either passes through the question or gets a new one
const getQoDPromise = () => {
  return new Promise(function(resolve, reject){
    // get the latest question
    QoD.findOne({
      order: [ [ 'id', 'DESC' ]]
      })
      .then(dbqod =>{
        // check if the question was created today
        const qdate = dbqod.createdAt;
        if (date.isSameDay(qdate, today)) {
          console.log (qdate, today, date.isSameDay(qdate,today));
          resolve( dbqod); //question was from today, return the question
        } else {
          console.log (qdate, today, date.isSameDay(qdate,today));
          console.log ('uh-oh');
          resolve ('new'); //question was not from today, return flag to get a new question
        }
      } )
  });
}

const newQoDPromise = (qod) => {
  return new Promise(function(resolve, reject){
    if (qod == 'new'){
      // get a new question
      var requestUrl = 'https://opentdb.com/api.php?amount=1';
      fetch(requestUrl)
      .then(res => res.json())
      .then(json => QoD.create({
          day_used: today,
          question: json.results[0]
          }).then(q => {
            console.log('q.q', q.question);
            resolve (q.question);}))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    } else {resolve (qod.question)} //didn't need a new question
  })
}

// ************************** Get "/" Route ************************
// EXAMPLE:
// http://localhost:3001/api/q/qod/
// Returns json of the most recent question

router.get("/", (req, res) => {
  console.log("qod-routes");
  getQoDPromise()
    .then(qod => newQoDPromise(qod))
    .then(newq =>res.json(newq))
    .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });  
});

module.exports = router;