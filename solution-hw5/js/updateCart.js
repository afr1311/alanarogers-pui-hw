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