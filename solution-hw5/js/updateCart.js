// create set to store roll objects
const rollSet = new Set();

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

// make 4 new Roll objects and add to cart

// function that allows us to make new rolls and adds them to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    // calculate price here
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}

// creating roll objects
const originalRoll = addNewRoll(
    "Original",
    "Sugar Milk",
    1,
    2.49
);

const wallnutRoll = addNewRoll(
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


// loop through set and create DOM element for each roll object
for (const roll of rollSet) {
    console.log(roll);
    createElement(roll);
}

// creating element using HTML templates
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    // getting content from inside the template and copy it
    const clone = template.content.cloneNode(true);
    // store reference to the newly copid elemet
    roll.element = clone.querySelector('.roll');

    // grab a reference to .roll-list dic that will contain all of our rolls
    const rollListElement = document.querySelector('#roll-list');
}