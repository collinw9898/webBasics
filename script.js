var myNumber = 0;

function myFunction() {
    var text = document.getElementById('myText').value;

    myNumber = myNumber + text;

    document.getElementById('output').innerHTML = myNumber + text;
}

var newOutput = '';

function newBoi(thing) {
    var num = document.getElementById('myText').value;

    if (num > 5)
        alert('ha ha, no.');
    else
        alert('ha ha, small boi');
}