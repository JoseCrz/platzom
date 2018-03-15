'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
//Programa que modifica strings siguiendo ciertas condiciones


function platzom(str) {
    var translation = str;

    //1er condición: si la palabra termina en "ar", se le quita

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    //2da condición: si la palabra comienza con z, se le agrega al final "pe"

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //3ra condición: si la palabra traducida tiene más de 10 caracteres, se divide y se le agrega un guión en medio

    var length = translation.length;

    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    //4ta condición: si la palabra es un palindromo, se ignoran las otras condicioens y se regresa la palabra igual intercalando minusculas-mayusculas

    var reverse = function reverse(str) {
        return str.split("").reverse().join("");
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}