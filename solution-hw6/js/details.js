let cart = [];

// HW 6 save items in cart array to local storage
let cartData = localStorage.getItem('storedRolls');
if (cartData) cart = Array.from(JSON.parse(cartData));

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get("roll");

// access dictionary rolls --> from rollsData.js
let rollPrice = rolls[rollType].basePrice;
let rollImage = rolls[rollType].imageFile;

// update title in html
let titleElement = document.getElementById('title');
titleElement.innerHTML = rollType + " Cinnamon Roll";

// update header in html
let headerElement = document.getElementById('heading');
headerElement.innerHTML = rollType + " Cinnamon Roll";

// update image in html
let imageElement = document.getElementById('image');
imageElement.src = '../solution-hw6/assets/products/' + rollImage;

// update price in html
let priceElement = document.getElementById('total-price-detail');
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
    let packMenu = document.getElementById('pack-options-detail');
    let glazingMenu = document.getElementById('glazing-options-detail');

    // getting text from option that was selected
    let glazeChoice = glazingMenu.options[glazingMenu.selectedIndex].text;
    let packChoice = packMenu.options[packMenu.selectedIndex].text;

    // create new roll with the current selections
    let newRoll = new Roll(rollType, glazeChoice, packChoice, rollPrice);

    // adding to array cart -- at top of this page
    cart.push(newRoll);

    // HW 6 call saveToLocalStorage function when roll is created
    saveToLocalStorage();
}

// HW 6 save to local storage
function saveToLocalStorage() {
    const rollArrayString = JSON.stringify(cart);

    localStorage.setItem('storedRolls', rollArrayString);
}