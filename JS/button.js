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
        } else {
            if (name.charCodeAt(i) == 32) {
                newText = newText.concat('#');
            } else {
                newText = newText.concat(name[i]);
            }
        }
    }
    return newText;
}

let letter = function getLetters(name) {
    var j;
    for (j = 0; j < name.length; j++) {
        if (returnUppercase(name) || returnLowercase(name)) {
            return true; 
            /*
            retorne verdadeiro caso os caso
            os caracteres da string informada sejam 
            somente letras
            */
        } else {
            return false;
        }
    }
}

//retorno das letras maiusculas de acordo com a tabela ASCII
function returnUppercase(name) {
    return name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122;
}

//retorno das letras minusculas de acordo com a tabela ASCII
function returnLowercase(name) {
    return name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90;
}