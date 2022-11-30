// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const caseName = params.get("cases");

// access dictionary rolls --> from rollsData.js
let caseTitle = cases[caseName].title;
let caseImage = cases[caseName].imageFile;
let caseYear = cases[caseName].year;
let caseSector = cases[caseName].sector;
let caseDomain = cases[caseName].domain;
let caseDescription = cases[caseName].description;

// update title in html
let titleElement = document.getElementById('title');
titleElement.innerHTML = caseTitle;

// update header in html
let headerElement = document.getElementById('heading');
headerElement.innerHTML = caseTitle;

// update image in html
let imageElement = document.getElementById('image');
imageElement.src = '../fp/assets/200x200/' + caseImage;

// update year in html
let yearElement = document.getElementById('year');
yearElement.innerHTML = caseYear;

// update sector in html
let sectorElement = document.getElementById('sector');
sectorElement.innerHTML = caseSector;

// update domain in html
let domainElement = document.getElementById('domain');
domainElement.innerHTML = caseDomain;

// update description in html
let descriptionElement = document.getElementById('description');
descriptionElement.innerHTML = caseDescription;


