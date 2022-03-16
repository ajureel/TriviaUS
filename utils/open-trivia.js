const {QoD} = require('../../../models');

// ************ API Connection **********
// Open Trivia Documentation: https://opentdb.com/api_config.php
// request a token to prevent duplicates for a 6 hr period
// request token: https://opentdb.com/api_token.php?command=request
// Open Trivia URL example: https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE

//request a token and store with the host 
// to get questions... get the host token first then get questions 

// function getQoD() {
//     var requestUrl = 'https://opentdb.com/api.php?amount=1';
  
//     fetch(requestUrl)
//       .then(response => {

//         return response.json();
//       })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   }