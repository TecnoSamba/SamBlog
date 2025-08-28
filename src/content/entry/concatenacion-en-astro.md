---
title: Concatenación de strings en Astro
author: TecnoSamba
date: 04/03/2025
tech: Otros
---

***Astro***, ese framework de frotend (y ahora también backend) web tan querido por muchos desarrolladores, entre los que me incluyo. Pero ¿a que no sabías que hay muchas maneras para concatenar strings en este framework?

Cuando queremos concatenar varibles en `strings` en Astro tenemos varias opciones:
~~~astro
---
const data = 'example-data'

// 1: Declarar una varible y concatenar el valor, no es muy eficaz...

const example1 = data + 'example'
---
<h1>{example1}</h1>

<!-- 2: Concatenar el valor es una expresión de JavaScript/TypeScript-->
<h1>{data + 'example'}</h1>

<!-- 3: Utilizar el método .concat() nativo -->
<h1>{data.concat('example')}</h1>
~~~

## Utilizando una string de concatenación <code>``</code>

Podemos usar una string de concatenación para hacer nuestro código **más legible**:
~~~astro
---
const data = 'example-data'
---

<!-- String de Concatenación -->
<h1>{`${data}example`}</h1>
~~~

Y de esta forma tan simple podemos concatenar `strings` en Astro. Espero que te haya sido de utilidad y... ¡Hasta otro post👋!