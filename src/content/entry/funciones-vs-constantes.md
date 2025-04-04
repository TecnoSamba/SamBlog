---
title: Funciones vs Constantes, ¿cuál usar?
author: TecnoSamba21
date: 16/03/2025
tech: JavaScript
---

En *JavaScript* tenemos 2 formas principales para crear funciones, una es utilizando la palabra clave `function` y otra es asignándole una *lambda* a una constante: `const x = () => {}`. Ambas formas son completamente válidas y cada una tiene sus ventajas y desventajas.

# Comparativa

Veamos los pros y contras de cada una:

## Utilizando `function`

### ✅ Pros:

- **Invocable antes de su declaración**: Con las funciones tenemos la posibilidad de invocarlas antes de declararlas pudiendo organizar mejor nuestro código. Por ejemplo:

```javascript
imprimirNombre('TecnoSamba21')

function imprimirNombre(nombre) {
    console.log(`Mi nombre es ${nombre}`)
}
```

- **Estructura más simple**: Al utilizar solo una palabra clave y siendo "la manera más nativa" (por así decirlo) tiene una estructura bastante simple y legible:
    - `function`: palabra clave que declara la función
    - `nombre`: El nombre de la función que va a ser usado en el *scope* para su invocación
    - `(parametro)`: Los dos paréntesis entre los que vamos a declarar los parámetros
    - `{...}`: Las dos llaves entre los que vamos a declarar nuestro código

> [Referencia de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)

### ❌ Contras

- **Poco seguras**: Las funciones de este tipo son sobreescribibles, esto significa que el código que ejecutan puede ser cambiado. Por ejemplo:

```javascript
function ejemplo() {
    console.log('Esto es un ejemplo')
}

ejemplo() // Imprime en la consola "Esto es un ejemplo"

// La sobreescribimos
ejemplo = () => {
    return 0
}

ejemplo() // Retorna el valor 0
```

## Utilizando constantes con *lambdas*

### ✅ Pros

- **Muy seguras**: No son sobreescribibles por lo que su valor no se puede alterar:

```javascript
const ejemplo = () => {
    console.log('Esto es un ejemplo')
}

ejemplo() // Imprime en consola "Esto es un ejemplo"

ejemplo = () => { // "Uncaught TypeError: Assignment to constant variable": Se lanza un error y la función queda inalterada
    return 0
}
```

> [Referencia de MDN (constantes)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)

> [Referencia de MDN (*lambdas*)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### ❌ Contras

- **No invocables antes de su declaración**: No podemos invocarlas antes de declararlas como pasaba con las funciones (`Uncaught TypeError`)
- **Estructura más compleja**: Esta forma presenta una estructura más compleja que la de las funciones:
    - `const`: palabra clave para declarar un constante
    - `nombre`: Asignamos un nombre a la constante
    - `() => {...}`: Le asignamos como valor una *lambda* (funciones sin nombre):
      - `()`: Los dos paréntesis para declarar los parámetros
      - `=>`: Simbolo matemático llamado "**implica**" que indica la declaración de una *lambda*
      - `{...}`: Las dos llaves en las que introducir nuestro código

# Conclusión

Ahora que ya hemos visto ambas formas con sus pros y sus contras la decisión de usar cada una de ellas depende del contexto y de las preferencias del programador (a mí me gusta el método de las constantes y *lambdas*), ambas formas son completamente **válidas** y **aceptables**.

¡Hasta otro post 👋!