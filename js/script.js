/******************************************
Treehouse FSJS Techdegree:
A Random Quote Generator
******************************************/

/*  In the variable quotes you'll find a multidimensional array .
    Each array holds at least an "quote" and "source" property.
    Additional an array can contain an "citation" or "year" property.
*/
let quotes = [
  {quote:'Whenever I’m sad, I stop being sad and be awesome instead.' ,
  source: 'Barney Stinson',
  citation: 'Season 1, citation 3',
  year: 2005 },
  {quote:'It’s just, eventually we’re all gonna move on. It’s called growing up.' ,
  source: 'Lily Aldrin',
  citation: 'Season 5, citation 9',
  year: 2010 },
  {quote:'The future is scary, but you can’t just run back to the past because it’s familiar. Yes it’s tempting, but it’s a mistake.' ,
  source: 'Robin Scherbatsky',
  citation: 'Season 2, citation 17',
  year: 2006},
  {quote:'That cake. Best cake I ever had. Seriously, my stomach was like, ‘Hey bro, I don’t know what you’re eating cause I don’t have any eyes but it’s basically awesome, so keep sending it down Gullet Alley.' ,
  source: 'Marshall Eriksen',
  citation: 'Season 7, citation 1',
  year: 2012},
  {quote:'I realized that I’m searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.' ,
  source: 'Barney Stinson',
  citation: 'Season 9, citation 1'},
  {quote:'We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble.' ,
  source: 'Lily Aldrin',
  year: 2006},
  {quote:'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.' ,
  source: 'Ted Mosby',
  citation: 'Season 4, citation 12'},
  {quote:'A lie is just a great story that someone ruined with the truth.' ,
  source: 'Barney Stinson',
  year: 2009},
]

// the function returns a random array from the multidimensional array quotes.
function getRandomQuote(array) {
  let randomNumber = Math.floor (Math.random() * array.length);
  return quotes[randomNumber];
}


/*  This function  prints a quote and a source property with every quote.
    Where applicable the function prints properties citation and year. */
function printQuote () {
  let htmlQuote = getRandomQuote(quotes)   // calls randomQuote and puts it in a variable.
  let htmlString = `
  <p class="quote">${htmlQuote.quote}</p>
  <p class="source">${htmlQuote.source}`; // sets up the htmlSting that needs to be printed and calls the values of properties quote and source.
  if (htmlQuote.citation !== undefined ){
  htmlString += `
    <span class="citation">${htmlQuote.citation}</span>`
  } // adds a citation property with text to htmlString if applicable.
  if (htmlQuote.year !== undefined ){
  htmlString += `
    <span class="citation">${htmlQuote.year}</span>`;
  } // adds a year property with text to htmlString if applicable
  htmlString += `</p>`; // completes the htmlString by concatenating a closing </p> tag to htmlString.
  return document.getElementById('quote-box').innerHTML = htmlString; //returns the full htmlString displaying a random quote.
}


//this functions creates a reference to the button and stores it inside the variable btn. (source for background changing colour: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
const btn = document.querySelector('button');
//This function creates a random number, needed to create a random color.
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

// changes queote each 5 seconds
let intervalChangeQuote = setInterval(printQuote, 5000);
// changes background color each 5 seconds
let intervalChangeColor = setInterval(randomColor, 5000);


// calls function everytime the button is clicked.
btn.onclick = randomColor();
// Function calls the random color and replaces the background color.
function randomColor() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


// This code calls the printQuote function each time the user clicks the button "show another quote".
document.getElementById('load-quote').addEventListener("click", printQuote, false);
