let cartData = JSON.parse(localStorage.getItem('storedRolls'));
// ... is spread - converts array to set
let rollSet = new Set([...cartData]);

let glazeList = {
    "Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double chocolate": 1.5
}

let packList = {
    1:1,
    3:3,
    6:5,
    12:10
}

// creating template for new roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, calculatedPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        // this.calculatedPrice = calculatedPrice;

        this.element = null;
    }
}

// function that allows us to make new rolls and adds them to set
function addNewRoll(rollType, rollGlazing, packSize) {
    // rolls is from rollsData.js and gets corresponding basePrice
    let basePrice = rolls[rollType].basePrice;
    // going to glazeList, finding glaze and if glaze is equal to rollGlazing (which is attribute of roll object)...
    // https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
    let glazeObject = glazeList.find(o => o.glaze === rollGlazing);
    // ... assign price value to it
    let priceGlaze = glazeObject.price;

    // https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
    let packObject = packList.find(o => o.size === packSize);
    let pricePackSize = packObject.priceMultiply;

    let calculatedPrice = (basePrice + priceGlaze) * pricePackSize;
    // calculate price here
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice, calculatedPrice);
    rollSet.add(roll);
    return roll; 
}

// grabs <template> in HTML
function createElement(roll) {
    // grab reference to roll template
    const template = document.querySelector('#roll-template');
    // get content inside template and copy it
    const clone = template.content.cloneNode(true);
    // store a reference to newly copied element
    roll.element = clone.querySelector('.roll-cart');
    // adding event listener to delete rolls
    const btnDelete = roll.element.querySelector('#delete');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });
    // grab reference to .roll-list in HTML
    const rollListElement = document.querySelector('#roll-list');
    // add newly created elements using append or prepend
    rollListElement.prepend(roll.element);
    updateElement(roll);
}

// updating the total price in the cart
function updateTotalPrice() {
    let totalPrice = 0;
    for (const roll of rollSet) {
        totalPrice = totalPrice + roll.calculatedPrice;
    }
    const rollTotalPriceElement = document.querySelector('#total');
    rollTotalPriceElement.innerText = "$" + totalPrice.toFixed(2);
}

// updates template in HTML to show the rolls in the cart
function updateElement(roll) {
    // referring to rollsData.js
    let rollImage = rolls[roll.type].imageFile;
    // grabbing the id tags in HTML
    const rollImageElement = roll.element.querySelector('#image');
    const rollTypeElement = roll.element.querySelector('#type');
    const rollGlazingElement = roll.element.querySelector('#glazing');
    const rollPackSizeElement = roll.element.querySelector('#pack-size');
    const rollBasePriceElement = roll.element.querySelector('#price');
    
    // replacing the HTML with the roll data
    rollImageElement.src = '../solution-hw6/assets/products/' + rollImage;
    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackSizeElement.innerText = "Pack size: " + roll.size;
    roll.calculatedPrice = (roll.basePrice + glazeList[roll.glazing])*packList[roll.size];
    rollBasePriceElement.innerText = "$" + roll.calculatedPrice.toFixed(2);

    // to show total price in HTML
    updateTotalPrice();
}

// function to delete rolls
function deleteRoll(roll) {
    roll.element.remove();
    rollSet.delete(roll);
    localStorage.setItem('storedRolls', JSON.stringify(Array.from(rollSet)));

    // update total price when roll is deleted
    updateTotalPrice();
}

// loop that iterates through the rollSet to create each roll in HTML
for (const roll of rollSet) {
    createElement(roll);
}