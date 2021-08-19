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

function ajaxCall(calltype, callData) {
    console.log(calltype,callData);
    $.ajax({
        type: calltype,
        url: "controller.php",
        data: callData,
        success: function(result) {
            console.log ('success');
        }
    });
}

function incrementValue() {
    document.getElementById('consume').disabled = false;
    
    // var inreV = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number').value ;"
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    ajaxCall('POST', {'Name' : 'Tomatoes', 'Value' : value, 'Operation' : 'Buy'});
    value++;
    document.getElementById('number').value = value;
}

function incrementOnion() {
    document.getElementById('consume1').disabled = false;

    // var inreO = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number1').value ;"
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    ajaxCall('POST', {'Name' : 'Onion', 'Value' : value, 'Operation' : 'Buy'});
    value++;
    document.getElementById('number1').value = value;
}

function incrementcheese() {
    document.getElementById('consume2').disabled = false;

    // var inreC = "ALTER grocerdb.additem AUTO_INCREMENT = document.getElementById('number2').value;"
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    ajaxCall('POST', {'Name' : 'Cheese', 'Value' : value, 'Operation' : 'Buy'});
    value++;
    document.getElementById('number2').value = value;
}

function decrementValue() {
    var temp = document.getElementById('number').value;
    // var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  where Name = 'Tomato'"

    temp--;
    document.getElementById('number').value = temp;
    ajaxCall('POST', {'Name' : 'Tomatoes', 'Value' : temp-1, 'Operation' : 'Consume'});
    if (document.getElementById('number').value == 0) {
        document.getElementById('consume').disabled = true;
    }
}

function decrementOnion() {
    var temp = document.getElementById('number1').value;
    // var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  Name = 'Onion"

    temp--;
    document.getElementById('number1').value = temp;
    ajaxCall('POST', {'Name' : 'Onion', 'Value' : temp-1, 'Operation' : 'Consume'});
    if (document.getElementById('number1').value == 0) {
        document.getElementById('consume1').disabled = true;
    }
}

function decrementCount() {
    var temp = document.getElementById('number2').value;
    // var decreV = "update grocerdb.additem set NoOfItem = NoOfItem - 1  Name = 'Cheese"

    temp--;
    document.getElementById('number2').value = temp;
    ajaxCall('POST', {'Name' : 'Cheese', 'Value' : temp-1, 'Operation' : 'Consume'});
    if (document.getElementById('number2').value == 0) {
        document.getElementById('consume2').disabled = true;
    }
}


function resetTomato() {
    // var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Tomato"
    ajaxCall('POST', {'Name' : 'Tomatoes', 'Value' : 0, 'Operation' : 'Reset'});
    document.getElementById('number').value = 0;

}

function resetOnion() {
    // var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Onion"
    ajaxCall('POST', {'Name' : 'Onion', 'Value' : 0, 'Operation' : 'Reset'});
    document.getElementById('number1').value = 0;

}

function resetCheese() {
    // var decreV = "update grocerdb.additem set NoOfItem = 0  Name = 'Cheese"
    ajaxCall('POST', {'Name' : 'Cheese', 'Value' : 0, 'Operation' : 'Reset'});
    document.getElementById('number2').value = 0;

}