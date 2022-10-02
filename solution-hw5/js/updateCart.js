// creating template for new roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}

// set to store roll objects
const rollSet = new Set();

// function that allows us to make new rolls and adds them to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    // calculate price here
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}


// NEED TO DO PRICE CALCULATIONS IN JS
// creating roll objects
const originalRoll = addNewRoll(
    "Original",
    "Sugar Milk",
    1,
    2.49
);

const walnutRoll = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    12,
    39.90
);

const raisinRoll = addNewRoll(
    "Raisin",
    "Sugar Milk",
    3,
    8.97
);

const appleRoll = addNewRoll(
    "Apple",
    "Original",
    3,
    10.47
);

// loop that iterates through the rollSet
for (const roll of rollSet) {
    console.log(roll);
    createElement(roll);
}

// grabs template in HTML
function createElement(roll) {
    // grab reference to roll template
    const template = document.querySelector('#roll-template');
    // get content inside template and copy it
    const clone = template.content.cloneNode(true);
    // store a referene to newly copied element
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

// updates template in HTML to show the rolls
function updateElement(roll) {
    // referring to rollsData.js
    let rollImage = rolls[roll.type].imageFile;

    const rollTypeElement = roll.element.querySelector('#type');
        const rollGlazingElement = roll.element.querySelector('#glazing');
        const rollPackSizeElement = roll.element.querySelector('#pack-size');
        const rollBasePriceElement = roll.element.querySelector('#price');
        const rollImageElement = roll.element.querySelector('#image');

    rollTypeElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackSizeElement.innerText = "Pack size: " + roll.size;
    rollBasePriceElement.innerText = "$" + roll.basePrice.toFixed(2);
    rollImageElement.src = '../solution-hw5/assets/products/' + rollImage;
}

// function to delete rolls
function deleteRoll(roll) {
    roll.element.remove();
    rollSet.delete(roll);
}



// NEED TO DO TOTAL PRICE CALCULATION