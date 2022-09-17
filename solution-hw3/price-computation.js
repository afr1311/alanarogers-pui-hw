var glazelist = [
    { glaze: 'Keep original', price: 0 },
    { glaze: 'Sugar Milk', price: 0 },
    { glaze: 'Vanilla Milk', price: 0.5 },
    { glaze: 'Double chocolate', price: 1.5 }
];

var quantity = [
    { size: '1', pricemultiply: 1 },
    { size: '3', pricemultiply: 3 },
    { size: '6', pricemultiply: 5 },
    { size: '12', pricemultiply: 10 }
];

// links to dropdown in HTML
var select = document.createElement("glazingOptions");


for (let i = 0; i < glazelist.length; i++)
{
    let glazeselect = glazelist[i].glaze;
    select.appendChild(glazeselect);

}

function glazingChange(element) {



    // get value of selected glazing option
    const priceChange = element.value;

    

// update price

}

