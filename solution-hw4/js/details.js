var cart = [];

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get("roll");

// access dictionary rolls --> from rollsData.js
var rollPrice = rolls[rollType].basePrice;
var rollImage = rolls[rollType].imageFile;

// update title in html
var titleElement = document.getElementById('title');
titleElement.innerHTML = rollType + " Cinnamon Roll";

// update header in html
var headerElement = document.getElementById('heading');
headerElement.innerHTML = rollType + " Cinnamon Roll";

// update image in html
var imageElement = document.getElementById('image');
imageElement.src = '../solution-hw4/assets/products/' + rollImage;

// update price in html
var priceElement = document.getElementById('total-price-detail');
priceElement.innerHTML = "$" + rollPrice;

// creating template for new roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// function to add roll selections to cart (and console.log)
function addToCart(){

    // getting pack and glazing selections from dropdown menu
    // loading menus into javascript
    var packMenu = document.getElementById('pack-options-detail');
    var glazingMenu = document.getElementById('glazing-options-detail');

    // getting text from option that was selected
    var glazeChoice = glazingMenu.options[glazingMenu.selectedIndex].text;
    var packChoice = packMenu.options[packMenu.selectedIndex].text;

    // create new roll with the current selections
    let newRoll = new Roll(rollType, glazeChoice, packChoice, rollPrice);

    // adding to array cart -- at top of this page
    cart.push(newRoll);
    console.log(cart);
}