---
title: Srcdoc, la propiedad oculta del iframe
author: TecnoSamba21
date: 03/03/2025
tech: Html
---

Muchos de nosotros conocemos los `Iframes`, esos elementos de HTML que permiten tener una página hijo dentro de una página padre principal:
~~~html
<iframe src="https://example.com"></iframe>
~~~
Estos poseen diferentes tipos de metadatos especiales para su configuración, estos son:
- `src`: Especifica el origen del *iframe* (ej: https://example.com)
- `title`: El título de la pseudopágina
- Y otros muchos más
> [Referencia de MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)


Pero hay uno que no se suele mencionar y este es el `srcdoc`. Esta propiedad nos permite **inyectar código HTML** en el *iframe* haciendo que no dependamos de una web externa para renderizar contenido en él:
~~~html
<iframe
srcdoc="
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <h1>Hola Mundo!</h1>
    <body>
</html>
"
>
</iframe>
~~~
Y no solo eso, podemos inyectar CSS y JavaScript con sus respectivas etiquetas dentro de este código HTML.

Creo que esto va a facilitarte bastante la vida a la hora de trabajar con *iframes* o, por lo menos, enseñarte algo nuevo de HTML (que nunca viene mal), ¡hasta otro post👋!