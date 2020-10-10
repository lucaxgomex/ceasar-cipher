function showResult() {
    var stringValue = getString();
    var numberValue = getNumber();
    var result = ceaserCipher(stringValue, numberValue);
    document.form.display.value = result;
}

function getString() {
    var s = document.getElementById("string").value;
    return s;
}

function getNumber() {
    var n = document.getElementById("number").value;
    return parseInt(n);
}

function ceaserCipher(name, rotation) {
    var i;
    var newText = "";   
    var newChar = 0;

    for (i = 0; i < name.length; i++) {
        if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122
        || name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
            newChar = String.fromCharCode(name.charCodeAt(i) + rotation);
            newText += newChar;
        }
    }
    return newText;
}