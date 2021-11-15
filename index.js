const questions = [
  {
    que: `India's first win in a World Cup match against?`,
    arr: ['Sri Lanka', 'West Indies', 'East Africa', 'England'],
    ans: 2
  },
  {
    que: `Which cricketer has the best economy rate at the World Cup?`,
    arr: ['Venkatesh Prasad', 'Kapil Dev', 'Harbhajan Singh', 'Anil Kumble'],
    ans: 2
  },
  {
    que: `How much did Sunil Gavaskar score for India in its very first World Cup match played against England in 1975?`,
    arr: ['111 off 100 balls', '36 off 36 balls', '79 off 99 balls', '36 off 174 balls'],
    ans: 4
  },
  {
    que: `Which cricketer has the best bowling average at the World Cup?`,
    arr: ['Anil Kumble', 'Kapil Dev', 'Javagal Srinath', 'Zaheer Khan'],
    ans: 1
  },
  {
    que: `Against which country did India win with the most significant margin by runs in a World Cup?`,
    arr: ['Sri Lanka', 'Namibia', 'Bermuda', 'England'],
    ans: 3
  },
  {
    que: `Which cricketer has scored the most runs at the World Cup?`,
    arr: ['Sachin Tendulkar', 'Mohammad Azharuddin', 'Saurav Ganguly', 'Rahul Dravid'],
    ans: 1
  },
  {
    que: `In which year were the World Cup matches reduced to 50 overs from the previous 60 overs?`,
    arr: ['1979', '1992', '1987', '1983'],  
    ans: 3
  },

];

// intro section
const chalk = require('chalk');

console.log(chalk.bold.underline.grey.bgBlueBright(`Welcome to the quiz🎆`))
const introStr = `\nThis quiz has two levels: \n  Level-1 has 4 questions \n  Level-2 has 3 questions \n\nTo get to the level 2, you have to give two correct answers from level-1 \nAnd to win, all answers should be correct from level-2 \n${chalk.blackBright.bold('Ahhh so much things')}😁`
console.log(chalk.bgGreenBright(introStr));
console.log('|-----________-----|')
console.log(`         |\|         `)

// main code
let score = 0;
const readline = require('readline-sync');

function quiz() {
  if((score === 5 || score===6 || score===7)) {
  const str = `\nHurray!You have won the quiz..🎉🎉 \nYour score is ${score}`;
  console.log(chalk.green.blackBright(str));
}
if((score >=0 && score<=4)) {
  const str = `\nSorry! You didn't make it to your win 😥\nYour score is ${score}`;
  console.log(chalk.bgWhite.yellowBright(str));
}


for(let i=0; i<questions.length; i++) {
  let queObj = questions[i] 
  let ask = readline.keyInSelect(queObj.arr, queObj.que);
  
  if(ask+1 === queObj.ans){
    score++
  }

  if((score >= 2 && score <= 4) && i === 3) {
    const str = `\nWow! you made it to the level-2. You are playing superbly!`;
    console.log(chalk.bgWhite.yellowBright(str));
  } 
  else if(score>=0 && score<2 && i === 3){
    const str = `\nSorry! You didn't make it to level 2 😥\nYour score is ${score}`;
    return chalk.bgWhite.yellowBright(str);
  }
}

};

quiz();