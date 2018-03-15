const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

    it('si la palabra termina en "ar", se le quita', function () {
        const translation = platzom('Programar')
        expect(translation).to.equal('Program')
    })

    it('si la palabra comienza con z, se le agrega al final "pe"', function () {
        const translation = platzom('Zorro')
        const translation2 = platzom('Zarpar')

        expect(translation).to.equal('Zorrope')
        expect(translation2).to.equal('Zarppe')
        
    })

    it('si la palabra traducida tiene más de 10 caracteres, se divide y se le agrega un guión en medio', function () {
        const translation = platzom('abecedario')
        
        expect(translation).to.equal('abece-dario')
    })

    it('si la palabra es un palindromo, se ignoran las otras condicioens y se regresa la palabra igual intercalando minusculas-mayusculas', function () {
        const translation = platzom('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })
})