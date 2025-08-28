---
title: Obtener errores de ejecución de un iframe
author: TecnoSamba
date: 08/03/2025
tech: JavaScript
---

Cuando se trabaja con iframes, uno de los trabajos más exasperantes sin lugar a dudas es **obtener los errores de ejecución de un iframe en una página principal**. Por eso en este post veremos como podemos hacer esto con *vanilla JavaScript* utilizando la función `parent.postMessage()` y el *listener* `onerror`.

Lo primero que necesitamos es una forma de **inyectar código JavaScript** en el *iframe*, para ello podemos utilizar diversos métodos (hace un tiempo publiqué uno de ellos en un post):

> [SrcDoc, la propiedad oculta del iframe](/entries/srcdoc-propiedad-oculta-iframe)

Cuando ya podamos inyectar JavaScript en el *iframe*, vamos a añadir este código:

```javascript
window.onerror = (error) => {
    window.parent.postMessage({
        MessageError: error,
        DataDOM: "iframe"
    }, "*")
}
```

## Análisis del código

Este código lo que va hacer es enviar un mensaje a la página padre cada vez que se detecte un error en el *iframe*. Vamos a analizarlo más a fondo:

- `window.onerror`: Esta *listener* ejecuta una función cada vez que hay un error en la página, aquí la sobreescribimos.
- `(error) => {...}`: Aquí creamos una *lambda* (una función sin nombre) para asignarle una función al *listener*.
- `window.parent.postMessage({...}, '*')`: Esta función nos permite enviar un mensaje a la página padre correspondiente de la página hijo, en nuestro caso, nuestra página principal. Esta función recibe 2 argumentos:
    - `{...}`: Recibe el dato que se va a enviar, en este caso es un objeto pero puede ser cualquier tipo de dato que desees. Aquí le asignamos 2 valores al objeto:
        - `MessageError: error`: Recogemos el parámetro de la *lambda*, `error`.
        - `DataDOM`: Este valor nos servirá luego para saber que elemento del DOM está enviando el mensaje. Este valor es **opcional**.
    - `'*'`: Aquí especificamos el origen, en este caso le decimos que puede ser cualquier origen, pero por mayor seguridad es mejor especificar uno determinado. Véase la [referencia de MDN](https://developer.mozilla.org/es/docs/Web/API/Window/postMessage).


## Recibir el mensaje en la página principal

Para recibir el mensaje en nuestra página principal vamos a utilizar un *listener* llamado `onmessage`:

```javascript
window.addEventListener('message', ev => {
    if (ev.data.DataDOM === "iframe") {
        // Aquí puedes hacer lo que quieras (un console.error(), llamada a una base de datos, etc.)
        console.error('Iframe Error: ', ev.error)
    }
})
```

Y así es como podemos obtener los errores de un iframe en nuestra página principal, espero que os sea de utilidad y... ¡Hasta otro post👋!
