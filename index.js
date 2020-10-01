// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * - counter1 is defining count in its lexical scope and then returning an anonymous function that adds 1 to count with every call
 * - counter2 is defining count in the global scope. Additions to count are being done through calling counter2 and this will directly have an impact on the count variable in global.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * - both functions use closure, but in two different ways. Counter1 uses in function closure and returns a function from within a function. Counter2 uses closure in the context of counter2() reaching out and grabbing the variable from outside its scope and then incrementing it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * - If you want to make the count variable more private, then counter1 would be better
 * - counter2 allows more accessibility to the count variable
 * - counter1 allows for less manipulation of the count variable. It can also be re-assigned to many variables at 0 at the same time.  
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

let inningScore = Math.floor(Math.random() * 3);
return inningScore;

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// input: callback function inning (generating a random number between 0 and 2 every single time it is called)
// input: number of innings (iterations) that will run in order to reach the final score
// input: object parameters in body of the function including home and away
// output: object with home and away scores 
// execution: create a new object with home and away properties
// iterate over number of innings, calling the callback once on the home property and once on the away property
// return updated object


// function finalScore(callback,num){

//   let scoreObj = {
//     Home: 0,
//     Away: 0,
//   }
//   for (let i = 1; i <= num; i++) {
//     scoreObj.Home += callback();
//     scoreObj.Away += callback();
//     console.log(`inning number ${i}: awayTeam: ${scoreObj.Away}, homeTeam: ${scoreObj.Home}`);
//   }
//   return `Final Score --> HomeTeam: ${scoreObj.Home}, AwayTeam: ${scoreObj.Away}`;
// }

function finalScore(callback,num){

  let scoreObj = {
    Home: 0,
    Away: 0,
  }
  for (let i = 1; i <= num; i++) {
    scoreObj.Home += callback();
    scoreObj.Away += callback();
  }
  return scoreObj;
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// input: callback function inning (calculates the score)
// input: callback function (inningscore) that adds innings to object
// input: number of innings to be printed
// execution: cb1,cb2,num

function scoreboard(cb1,cb2,num) {
  for (let i = 1; i <= num; i++) {
    console.log(`inning number ${i}: awayTeam: ${cb2(cb1,num).Away}, homeTeam: ${cb2(cb1,num).Home}`);
  }
  return `Final Score --> HomeTeam: ${cb2(cb1,num).Home}, AwayTeam: ${cb2(cb1,num).Away}`
}

// function scoreboard(cb1,cb2,num) {
//   return cb2(cb1,num);
// }

scoreboard(inning,finalScore,9);
