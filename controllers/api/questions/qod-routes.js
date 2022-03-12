const router = require("express").Router();
const {QoD} = require('../../../models');
const date = require('date-and-time');

//import fetch from 'node-fetch';
//  import fetch from 'node-fetch';
//  ^^^^^^
// SyntaxError: Cannot use import statement outside a module

const fetch = require('node-fetch');
const { res } = require("date-and-time");
// const fetch = require('node-fetch');
//               ^
// Error [ERR_REQUIRE_ESM]: require() of ES Module C:\Users\james\OneDrive\Desktop\Bootcamp\Working\TriviaUS\node_modules\node-fetch\src\index.js from C:\Users\james\OneDrive\Desktop\Bootcamp\Working\TriviaUS\controllers\api\questions\qod-routes.js 
// not supported.
// Instead change the require of index.js in C:\Users\james\OneDrive\Desktop\Bootcamp\Working\TriviaUS\controllers\api\questions\qod-routes.js 
// to a dynamic import() which is available in all CommonJS modules.


const today = new Date();

// new promise will go inside of router
// get our latest question and determine if it is from today or not
// returns latest question or 'new' if a new question is needed
const getQoDPromise = () => {
  return new Promise(function(resolve, reject){
    QoD.findOne({
      order: [ [ 'id', 'DESC' ]]
      })
      .then(dbqod =>{
        const qdate = dbqod.createdAt;
        if (date.isSameDay(qdate, today)) {
          console.log (qdate, today, date.isSameDay(qdate,today));
          resolve( dbqod);
        } else {
          console.log (qdate, today, date.isSameDay(qdate,today));
          console.log ('uh-oh');
          resolve ('new');
        }
      } )
  });
}

const newQoDPromise = (qod) => {
  return new Promise(function(resolve, reject){
    if (qod == 'new'){
      var requestUrl = 'https://opentdb.com/api.php?amount=1';
      fetch(requestUrl)
      .then(res => res.json())
      .then(json => QoD.create({
          day_used: today,
          question: json.results[0]
          }).then(q => {
            console.log('q.q', q.question);
            resolve (q);}))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    } else {resolve (qod)}
  })
}





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