/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

let quotes = [
  {quote:'Whenever I’m sad, I stop being sad and be awesome instead.' ,
  actor: 'Barney Stinson',
  episode: 'Season 1, Episode 3',
  year: 2005 },
  {quote:'It’s just, eventually we’re all gonna move on. It’s called growing up.' ,
  actor: 'Lily Aldrin',
  episode: 'Season 5, Episode 9',
  year: 2010 },
  {quote:'The future is scary, but you can’t just run back to the past because it’s familiar. Yes it’s tempting, but it’s a mistake.' ,
  actor: 'Robin Scherbatsky',
  episode: 'Season 2, Episode 17',
  year: 2006},
  {quote:'That cake. Best cake I ever had. Seriously, my stomach was like, ‘Hey bro, I don’t know what you’re eating cause I don’t have any eyes but it’s basically awesome, so keep sending it down Gullet Alley.' ,
  actor: 'Marshall Eriksen',
  episode: 'Season 7, Episode 1',
  year: 2012},
  {quote:'I realized that I’m searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.' ,
  actor: 'Barney Stinson',
  episode: 'Season 9, Episode 1',
  year: 2014},
  {quote:'We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble.' ,
  actor: 'Lily Aldrin',
  episode: 'Season 2, Episode 10',
  year: 2006},
  {quote:'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.' ,
  actor: 'Ted Mosby',
  episode: 'Season 4, Episode 12',
  year: 2008},
  {quote:'A lie is just a great story that someone ruined with the truth.' ,
  actor: 'Barney Stinson',
  episode: 'Season 5, Episode 4',
  year: 2009},
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor (Math.random() * array.length);
  let randomQuote = [];
  randomQuote.push(array[randomNumber].quote);
  return randomQuote;
}

/***
 * `printQuote` function
***/

function printQuote () {
  let htmlQuote = getRandomQuote(quotes);
  let htmlString =
  `<p class="quote"> `"${htmlQuote}"`</p>
  <p class="source"> quote source
    <span class="citation"> quote citation </span>
    <span class="year"> quote year </span>
  </p>`
  return document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);
