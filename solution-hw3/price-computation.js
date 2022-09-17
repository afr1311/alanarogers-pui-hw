var glazelist = [
    { glaze: 'Keep original', price: 0 },
    { glaze: 'Sugar Milk', price: 0 },
    { glaze: 'Vanilla Milk', price: 0.5 },
    { glaze: 'Double chocolate', price: 1.5 }
];

var packlist = [
    { size: '1', pricemultiply: 1 },
    { size: '3', pricemultiply: 3 },
    { size: '6', pricemultiply: 5 },
    { size: '12', pricemultiply: 10 }
];

// links to glazing dropdown in HTML
var select = document.getElementById('glazingOptions');

// creating dropdown menu by looping through glazelist
for (let i = 0; i < glazelist.length; i++)
{
    let glazeselect = glazelist[i];

    // creating space to put in each of options
    var options = document.createElement('option');

    // put information into that spot
    // taking glaze name from glazelist and putting it in options
    options.textContent = glazeselect.glaze;

    // taking glaze price from glazelist and putting it in options
    options.value = glazeselect.price;

    // putting info that was just collected into HTML dropdown menu
    select.append(options);
}


// links to pack size dropdown in HTML
var select = document.getElementById('packOptions');

// creating dropdown menu by looping through packlist
for (let i = 0; i < packlist.length; i++)
{
    let packselect = packlist[i];

    // creating space to put in each of options
    var options = document.createElement('option');

    // put information into that spot
    // taking pack size from packlist and putting it in options
    options.textContent = packselect.size;

    // taking pack pricemultiply from packlist and putting it in options
    options.value = packselect.pricemultiply;

    // putting info that was just collected into HTML dropdown menu
    select.append(options);
}




function glazingChange(element) {

    // get value of selected glazing option
    const priceChange = element.value;

// update price

}

