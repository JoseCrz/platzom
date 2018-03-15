//Programa que modifica strings siguiendo ciertas condiciones


export default function platzom (str) {
    let translation = str
    
    //1er condición: si la palabra termina en "ar", se le quita

    if(str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }

    //2da condición: si la palabra comienza con z, se le agrega al final "pe"

    if(str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    //3ra condición: si la palabra traducida tiene más de 10 caracteres, se divide y se le agrega un guión en medio

    const length = translation.length

    if (length >= 10 ) {
        const firstHalf = translation.slice(0, Math.round(length/2))
        const secondHalf = translation.slice(Math.round(length/2))
        translation = `${firstHalf}-${secondHalf}`
    }

    //4ta condición: si la palabra es un palindromo, se ignoran las otras condicioens y se regresa la palabra igual intercalando minusculas-mayusculas

    const reverse = (str) => str.split("").reverse().join("")

    function minMay (str) {
        const length = str.length
        let translation = ''
        let capitalize = true

        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }

        return translation
    }

    if (str == reverse(str)) {
        return minMay(str)
    }

    return translation
}