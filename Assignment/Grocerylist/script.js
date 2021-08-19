var tomatoCount = 0;
var cheeseCount = 0;
var onionCount = 0;
var valueCount;
// document.querySelector("btn-plus").addEventListener("click",function()
// {
// 	valueCount=document.getElementById('number').value;
// 	valueCount++;
// 	document.getElementById('number').value=valueCount;
// })f


function incrementValue() {
    document.getElementById('consume').disabled = false;
    
    var inreV = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number').value ;"
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function incrementOnion() {
    document.getElementById('consume1').disabled = false;

    var inreO = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number1').value ;"
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number1').value = value;
}

function incrementcheese() {
    document.getElementById('consume2').disabled = false;

    var inreC = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number2').value;"
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}

function decrementValue() {
        var temp = document.getElementById('number').value;
        var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  where Name = 'Tomato'"

        temp--;
        document.getElementById('number').value = temp;
        if (document.getElementById('number').value == 0) {
            document.getElementById('consume').disabled = true;
        }
}

function decrementOnion() {
    var temp = document.getElementById('number1').value;
    var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  Name = 'Onion"

    temp--;
    document.getElementById('number1').value = temp;
    if (document.getElementById('number1').value == 0) {
        document.getElementById('consume1').disabled = true;
    }
}

function decrementCount() {
    var temp = document.getElementById('number2').value;
    var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  Name = 'Cheese"

    temp--;
    document.getElementById('number2').value = temp;
    if (document.getElementById('number2').value == 0) {
        document.getElementById('consume2').disabled = true;
    }
}


function resetTomato() {
    var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Tomato"

    document.getElementById('number').value = 0;

}

function resetOnion() {
    var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Onion"

    document.getElementById('number1').value = 0;

}

function resetCheese() {
    var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Cheese"

    document.getElementById('number2').value = 0;

}