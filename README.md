# Platzom

Platzom es un idioma inventado en uno de los ejercicios del curso de JavaScript de Platzi

## Reglas:

- 1er condición: si la palabra termina en "ar", se le quita
- 2da condición: si la palabra comienza con z, se le agrega al final "pe"
- 3ra condición: si la palabra traducida tiene más de 10 caracteres, se divide y se le agrega un guión en medio
- 4ta condición: si la palabra es un palindromo, se ignoran las otras condicioens y se regresa la palabra igual intercalando minusculas-mayusculas

## Instalación:
```
npm install platzom
```

## Uso:

```
import platzom from 'platzom'
platzom('Pogramar') //program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('abecedario') //abece-dario
```

## Créditos

- [Platzi](https://platzi.com)
- [Sacha Lifszyc](https://twitter.com/@slifszyc)
- [José Cuevas](https://twitter.com/@Jose_Crz)

## Licensia

[MIT](https://opensource.org/licenses/MIT)

