const { QoD } = require('../models');

const qodData = [
  { 
    day_used: '2022-03-01',
    question: {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which artist curated the official soundtrack for &quot;The Hunger Games: Mockingjay - Part 1&quot;?",
        "correct_answer": "Lorde",
        "incorrect_answers": [
        "Kanye West",
        "Tove Lo",
        "Charli XCX"
        ]
    }
  },
  {
    day_used: '2022-03-02',
    question: {
        "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the Halo series, what fleet was Thel &#039;Vadam supreme commander of before being branded an Arbiter?",
            "correct_answer": "Fleet of Particular Justice",
            "incorrect_answers": [
            "Fleet of Sacred Consecration",
            "Fleet of Furious Redemption",
            "Fleet of Righteous Vigilance"
        ]
    }
  },
  {
    day_used: '2022-03-03',
    question: {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What year was the RoboSapien toy robot released?",
        "correct_answer": "2004",
        "incorrect_answers": [
        "2000",
        "2001",
        "2006"
        ]
    }
  },
  {
    day_used: '2022-03-04',
    question: {
        "category": "Vehicles",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which one of the following is not made by Ford?",
        "correct_answer": "Camry",
        "incorrect_answers": [
        "Fusion",
        "Model A",
        "F-150"
        ]
    }
  }
];

const seedQoD = () => QoD.bulkCreate(qodData);

module.exports = seedQoD;