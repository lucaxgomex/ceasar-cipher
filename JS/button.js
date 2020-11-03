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
    var newChar;

    for (i = 0; i < name.length; i++) {
        if (letter) {
            newChar = String.fromCharCode(name.charCodeAt(i) + rotation);
            newText = newText.concat(newChar);
        } else if (beyondZ) {
            newChar = String.fromCharCode((name.charCodeAt(i) - 26) + rotation);
            newText = newText.concat(newChar);
        } else if (name.charCodeAt(i) == 32) {
            newChar = String.fromCharCode(name.charCodeAt(i) + 3);
            newText = newText.concat(newChar);
        } else {
            newText = newText.concat(name[i]);
        }
    }
    return newText;
}

const letter = function getLetters(name) {
    var j;
    for (j = 0; j < name.length; j++) {
        if (returnUppercase(name) || returnLowercase(name)) {
            return true; 
            /*
            retorne verdadeiro caso os caso
            os caracteres da string informada sejam 
            somente letras
            */
        }
    }
}

const beyondZ = function calculateZ(name) {
    var k;
    for (k = 0; k < name.length; k++) {
        if (uppercaseZ(name[k]) || lowercaseZ(name[k])) {
            return true;
        }
    }
}

//retorno das letras maiusculas de acordo com a tabela ASCII
function returnUppercase(name) {
    return name.charCodeAt(j) >= 97 && name.charCodeAt(j) <= 122;
}

//retorno das letras minusculas de acordo com a tabela ASCII
function returnLowercase(name) {
    return name.charCodeAt(j) >= 65 && name.charCodeAt(j) <= 90;
}

//retorno da letra 'z' 
function uppercaseZ(name) {
    return name.charCodeAt() == 122;
}

//retorno da letra 'Z' 
function lowercaseZ(name) {
    return name.charCodeAt() == 90;
}