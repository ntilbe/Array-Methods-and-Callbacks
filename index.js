import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
*/

let final2014 = fifaData.filter(game => (game['Year'] == 2014 && game['Stage'] === "Final"))[0]; // [0] at end grabs the first item in new array making it easier for us to access what we want (below) -- would have to do final2014[0]['Home Team Name']
console.log(`${final2014["Home Team Name"]}`);

// (a) Home Team name for 2014 world cup final
console.log(`${final2014["Home Team Name"]}`);
// (b) Away Team name for 2014 world cup final
console.log(`${final2014["Away Team Name"]}`);
// (c) Home Team goals for 2014 world cup final
console.log(`${final2014["Home Team Goals"]}`);
// (d) Away Team goals for 2014 world cup final
console.log(`${final2014["Away Team Goals"]}`);
// (e) Winner of 2014 world cup final 
console.log(`${final2014["Win Conditions"]}`);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const final = data.filter(fifa => fifa.Stage === "Final");
    return final;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {
    // Create an array called years to return
    let years = [];
    const result = getFinals(data);
   
    result.forEach(item => years.push(`${item.Year}`));
    return years;
};

console.log(getYears(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinals) {
    const result = getFinals(data);
    const winners = [];

    // look through each item in result 
    // if home team goals > away team goals, push home team name
    // if away team goals > home team goals, push away team name
    // if home team goals === away team goals

    result.forEach(item => {
        // console.log(`${item['Home Team Name']} ${item['Home Team Goals']} ${item['Away Team Name']} ${item['Away Team Goals']}`)

        if (item['Home Team Goals'] > item['Away Team Goals']) {
            winners.push(`${item['Home Team Name']}`)
        } else if (item['Away Team Goals'] > item['Home Team Goals']) {
            winners.push(`${item['Away Team Name']}`)
        } else if (item['Home Team Goals'] === item['Away Team Goals']) {
            // console.log(item['Win conditions']); 
            let winner = item['Win conditions'].split(' ', 1);
            winners.push(`${winner}`);
        }
    });
    return winners;   
}; 

console.log(getWinners(fifaData, getFinals)); 

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(data, getWinners, getYears) {
    let years = getYears(data, getFinals); 
    console.log(years); 
    let winners = getWinners(data, getFinals); 
    console.log(winners);

    // couldn't figure out how to make use of the two arrays above until i tried to find a way to merge them together
    // found this (below) and realized I could use ${} to make the string whatever I want
    // https://stackoverflow.com/questions/43170806/merge-multiple-arrays-based-on-their-index-using-javascript

    let allWinners = years.map((e,i) => `In ${e}, ${winners[i]} won the world cup!`); 
    
    return allWinners; 
};

console.log(getAllWinners(fifaData, getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getCountryWins(data, tmI) {
    // create an array with every game that team played in
    // going to seperate out home and away games to simplify totally goals at later step
    const allHomeGames = data.filter( game => game['Home Team Initials'] === tmI);
    const allAwayGames = data.filter( game => game['Away Team Initials'] === tmI); 

    // use reduce to add up total home/away goals respectively
    const homeGoals = allHomeGames.reduce((acc,item) => acc + item['Home Team Goals'],0); 
    const awayGoals = allAwayGames.reduce((acc,item) => acc + item['Away Team Goals'],0); 

    // return home + away totals
    return homeGoals + awayGoals; 
};

getCountryWins(fifaData, 'BRA');


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
