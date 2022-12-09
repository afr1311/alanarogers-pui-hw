// get the query string from the URL
const queryString = window.location.search;

// use the query string to create a URLSearchParams object
const params = new URLSearchParams(queryString);

// access the parameter
const caseName = params.get("cases");

// access dictionary
let caseTitle = cases[caseName].title;
let caseImage = cases[caseName].imageFile;
let caseAlt = cases[caseName].alt;
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
imageElement.src = '../assets/200x200/' + caseImage;
imageElement.alt = caseAlt;

// update year in html
let yearElement = document.getElementById('year');
yearElement.innerHTML = "Year: " + caseYear;

// update sector in html
let sectorElement = document.getElementById('sector');
sectorElement.innerHTML = "Sector: " + caseSector;

// update domain in html
let domainElement = document.getElementById('domain');
domainElement.innerHTML = "Domain: " + caseDomain;

// update description in html
let descriptionElement = document.getElementById('description');
descriptionElement.innerHTML = caseDescription;