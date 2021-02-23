/******************************************
Treehouse FSJS Techdegree:
A Random Quote Generator
******************************************/

// In the variable quotes you'll find a multidimensional array .
// Each array holds at least an "quote" and "actor" property.
// Additional an array can contain an "episode" or "year" property.
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
  episode: 'Season 9, Episode 1'},
  {quote:'We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble.' ,
  actor: 'Lily Aldrin',
  year: 2006},
  {quote:'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.' ,
  actor: 'Ted Mosby',
  episode: 'Season 4, Episode 12'},
  {quote:'A lie is just a great story that someone ruined with the truth.' ,
  actor: 'Barney Stinson',
  year: 2009},
]

// the function returns a random array from the multidimensional array quotes.
function getRandomQuote(array) {
  let randomNumber = Math.floor (Math.random() * array.length);
  return quotes[randomNumber];
}




// This function  prints a quote and a actor property with every quote.
// Where applicable the function prints properties episode and year.
function printQuote () {
  let htmlQuote = getRandomQuote(quotes)   // calls randomQuote and puts it in a variable.
  let htmlString = `
  <p class="quote">${htmlQuote.quote}</p>
  <p class="source">${htmlQuote.actor}`; // sets up the htmlSting that needs to be printed and calls the values of properties quote and actor.
  if (htmlQuote.episode !== undefined ){
  htmlString += `
    <span class="citation">${htmlQuote.episode}</span>`
  } // adds a episode property with text to htmlString if applicable.
  if (htmlQuote.year !== undefined ){
  htmlString += `
    <span class="citation">${htmlQuote.year}</span>`;
  } // adds a year property with text to htmlString if applicable
  htmlString += `</p>`; // completes the htmlString by concatenating a closing </p> tag to htmlString.
  return document.getElementById('quote-box').innerHTML = htmlString; //returns the full htmlString displaying a random quote.
}


//this functions creates a reference to the button and stores it inside the variable btn.
const btn = document.querySelector('button');
//This function creates a random number, needed to create a random color. 
function random(number) {
  return Math.floor(Math.random() * (number+1));
}
// Function calls the random color and replaces the background color.
btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


// This code calls the printQuote function each time the user clicks the button "show another quote".
document.getElementById('load-quote').addEventListener("click", printQuote, false);
