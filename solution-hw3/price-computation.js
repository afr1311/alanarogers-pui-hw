const basePrice = 2.49;

var glazeList = [
    { glaze: 'Keep original', price: 0 },
    { glaze: 'Sugar Milk', price: 0 },
    { glaze: 'Vanilla Milk', price: 0.5 },
    { glaze: 'Double chocolate', price: 1.5 }
];

var packList = [
    { size: '1', priceMultiply: 1 },
    { size: '3', priceMmultiply: 3 },
    { size: '6', priceMultiply: 5 },
    { size: '12', priceMultiply: 10 }
];

// links to glazing dropdown in HTML
var select = document.getElementById('glazingoptions');

// creating dropdown menu by looping through glazelist
for (let i = 0; i < glazeList.length; i++)
{
    let glazeSelect = glazeList[i];

    // creating space to put in each of options
    var options = document.createElement('option');

    // put information into that spot
    // taking glaze name from glazelist and putting it in options
    options.textContent = glazeSelect.glaze;

    // taking glaze price from glazelist and putting it in options
    options.value = glazeSelect.price;

    // putting info that was just collected into HTML dropdown menu
    select.append(options);
}

// links to pack size dropdown in HTML
var select = document.getElementById('packoptions');

// creating dropdown menu by looping through packlist
for (let i = 0; i < packList.length; i++)
{
    let packSelect = packList[i];

    // creating space to put in each of options
    var options = document.createElement('option');

    // put information into that spot
    // taking pack size from packlist and putting it in options
    options.textContent = packSelect.size;

    // taking pack pricemultiply from packlist and putting it in options
    options.value = packSelect.priceMultiply;

    // putting info that was just collected into HTML dropdown menu
    select.append(options);
}


function glazingChange(element) {

    // get value of selected glazing option
    const glazingPrice = parseFloat(element.value);

    // getting packOptions from HTML
    var packMenu = document.getElementById('packoptions');
    var packPrice = parseFloat(packMenu.value);

    // updating price in HTML
    var newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
    var totalPrice = document.getElementById('totalprice');
    totalPrice.innerHTML = '$' + newPrice;
}

function packChange(element) {

    // get value of selected pack size option
    const packPrice = parseFloat(element.value);

    // getting glazingOptions from HTML
    var glazingMenu = document.getElementById('glazingoptions');
    var glazingPrice = parseFloat(glazingMenu.value);

    // updating price in HTML
    var newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
    var totalPrice = document.getElementById('totalprice');
    totalPrice.innerHTML = '$' + newPrice;
}