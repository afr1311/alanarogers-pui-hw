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

// create set to store roll objects
const rollSet = new Set();

// make 4 new Roll objects and add to cart

// function that allows us to make new rolls and adds them to set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    // calculate price here
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}


// creating element using HTML templates
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    // getting content from inside the template and copy it
    const clone = template.content.cloneNode(true);
    // store reference to the newly copid elemet
    roll.element = clone.querySelector('.roll');

    const btnDelete = roll.element.querySelector('.delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    })

    // grab a reference to .roll-list dic that will contain all of our rolls
    const rollListElement = document.querySelector('#roll-list');
    // add newly created elements -- can use append or prepend
    rollListElement.prepend(roll.element);

    // a call to the function updateElement
    updateElement(roll);
}


function updateElement(roll) {
    const rollImageElement = roll.element.querySelector('.roll-image');
    const rollTypeElement = roll.element.querySelector('.roll-type');
    const rollGlazingElement = roll.element.querySelector('.roll-type');
    const rollPackSizeElement = roll.element.querySelector('.roll-pack-size');
    const rollBasePriceElement = roll.element.querySelector('.roll-price-cart');

    // do I need to make rollImage constructor?
    // rollImageElement.src = roll.rollImage;
    rollTypeElement.innertext = roll.type;
    rollGlazingElement.innertext = roll.glazing;
    rollPackSizeElement.innertext = roll.size;
    rollBasePriceElement.innertext = roll.basePrice;
}

function deleteRoll(roll) {
    roll.element.remove();
    rollSet.delete(roll);
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