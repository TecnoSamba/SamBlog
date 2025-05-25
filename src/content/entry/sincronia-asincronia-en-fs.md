---
title: Sincronía y Asincronía en node:fs
author: TecnoSamba21
date: 10/04/2025
tech: JavaScript
---

***Node:fs*** o ***fs*** a secas es una librería que nos permite trabajar con directorios y archivos desde el backend de nuestra app. Este posee diferentes métodos como `fs.writeFile()` o `fs.readFile()` pero también posee estos en versión *Sync* como `fs.writeFileSync()`, pero... ¿Cuál es la diferencia?

# Métodos asíncronos (**sin** *Sync*)

Estos métodos como bien indica el título son **asíncronos** lo cual significa que no siguen el hilo principal de ejecución de nuestra app y devuelven una **promesa** que puede ser trabajada con métodos como `.then()`, esto se llaman *callbacks* en inglés o "llamadas de vuelta" en español. Un ejemplo:

~~~javascript
const fs = require('node:fs') // Instanciamos la librería fs

fs.readFile('/archivos/archivo.txt') // Leemos un archivo, nos devuelve un callback
    .then(contenido => { // Ejecutamos una función cuando se recibe el callback
        console.log(contenido) // La variable 'contenido' es el resultado de la lectura del archivo
    })
    .error(error => { // Podemos obtener si ha habido un error leyendo el archivo con el método '.error()'
        console.error(error)
    })
~~~

Esta estructura de métodos asíncronos es un poco compleja y ocupa mucho espacio de código, por lo que existen otras maneras de trabajar con asíncronos como con la *keyword* `await` con la que podemos obtener el resultado de la lectura directamente como una variable:

~~~javascript
const fs = require('node:fs')

const contenido = await fs.readFile('/archivos/archivo.txt') // Esto ya le asigna el resultado a la variable 'contenido'
~~~

> [Referencia de MDN (asincronía)](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Async_JS)

> [Documentación de *fs*](https://nodejs.org/es/learn/manipulating-files/reading-files-with-nodejs)

# Métodos sincronizados (con *Sync*)

Estos métodos, a diferencia que los asíncronos, se ejecutan en el hilo principal (al mismo tiempo que el resto del código) y devuelven el resultado directamente. Es, por ejemplo, `fs.readFileSync()`:

~~~javascript
const fs = require('node:fs') // Instanciamos fs

const contenido = fs.readFileSync('/archivos/archivo.txt') // Esto le asigna el resultado directamente a la variable 'contenido'
~~~

Esta manera de usar *fs* simplifica el código que usa la librería pero también tiene un **impacto negativo** en el rendimiento de tu app, asi que usa cualquiera de las dos formas según convenga.

> [Documentación de *fs*](https://nodejs.org/es/learn/manipulating-files/reading-files-with-nodejs)

# Despedida

Se me ocurrió la idea de hacer este post cuando estaba construyendo un [servidor de archivos](https://github.com/tecnosamba21/samfile) con *node.js* para aprovechar un ordenador fijo que tenía por ahí. Hice tanto el back como el front, para el que utilicé *vanilla JavaScript* con [Vite](https://vite.dev). Me parece un proyecto interesante para hacer de *hobby*, a ver si te da alguna idea 😉.

Hasta aquí por hoy, ¡Hasta el próximo post 👋!