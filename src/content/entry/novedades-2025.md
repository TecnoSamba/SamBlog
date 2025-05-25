---
title: Novedades del 2025 🎉
author: TecnoSamba21
date: 25/05/2025
tech: Other
---

El mundo de la programación está en constante cambio y este año no es una excepción. En el post de hoy vamos a revisar algunas de las noticias más interesantes y sorprendentes de este 2025.

## JQuery vuelve a la carga 🤨

Ya sé lo que estarás pensando, "¿JQuery no era esa librería que usaba mi abuel@ hace tropecientos años?", pues sí, has acertado. JQuery es una librería de *JavaScript* que provee funcionalidades de control del DOM ampliamente utilizada desde que se lanzó en el 2006 (fue la que introdució el mítico `$`), sin embargo, se ha ido abandonando progresivamente desde hace unos años debido a que con las nuevas APIs implementadas por los navegadores modernos ha ido perdiendo el sentido.

Pero JQuery no está dispuesta a rendirse y tenemos la beta *release* 4.0.0 de esta librería en la que se ha eliminado el soporte para muchos navegadores antiguos y trae algunas novedades.

Mientras sale la versión estable tendremos que esperar con esto:

~~~javascript
$('#esperando').html('<b>He resurgido para conquistar el mundo, jua, jua, jua</b>')
~~~

> [Post oficial de JQuery](https://blog.jquery.com/2024/07/17/second-beta-of-jquery-4-0-0/)

## GitHub Copilot de código abierto!

La pasada semana Microsoft presentó multiples novedades en su conferencia anual. Pero la noticia menos esperada sin lugar a dudas fue que la popular extensión de IA **GitHub Copilot se vuelve de código abierto** con licencia MIT. Ha habido múltiples teorías sobre el por qué de esta decisión, la más extendida es que Microsoft quiere "desprestigiar" a editores de código con IA como Cursor o Windsurf que son completamente cerrados y *forks* de Visual Studio Code haciendo que esta popular extensión se vuelva *open source* como el propio editor.

Pero no todo el alegría y rosas, la extensión aun no está liberada y Microsoft ha comunicado que tiene intención de hacerlo de aquí a unos meses, así que como con JQuery, nos toca esperar.

## Soporte nativo de MCPs para Windows 🪟

Aparte del anuncio de la liberación de GitHub Copilot, en la conferencia de Microsoft de la pasada semana también nos comunicaron un **soporte nativo de MCPs para Windows**. Los MCPs o *Model Context Protocol* por sus siglas en inglés Protocolo de Contexto del Modelo le permiten a los modelos de inteligencia artificial disponer de herramientas para ejecutar tareas que no podrían realizar sin ellas, como, por ejemplo, interactuar con tu sistema de archivos o consultar internet. Estos protocolos se han vuelto muy famosos y son el estándar para la comunicación de modelos neuronales con sistemas externos.

Debido a esta fama creciente, Microsoft ha decidido implementar en Windows una manera fácil y rápida de administrar y interactuar con estos protocolos. Ahora seguramente estés pensando "¿y como programador esto me debería importar por...?" pues porque gracias a esta implementación podremos acceder a estos MCPs instalados en el sistema desde vscode u otros editores de texto, con la extensión de Copilot con un solo click (o ni eso, porque se supone que Copilot va a disponer de ellos automáticamente).

Con esta novedad Microsoft deja claro que quiere posicionar a Windows como el sistema operativo número uno en lo que a IA respecta (vas mal Apple...).

## Google lanza *Jules*, su nuevo modelo agéntico para programación

Google también realizó la pasada semana su conferencia anual (¿casualidad? No lo creo) en la que aparte de presentar muchas novedades como el lanzamiento de Veo 3 (la impresionante actualización de Veo 2, su modelo de generación de video) o una traducción en tiempo real para Meet, presentó también otra que no fue tan sonada, Google ha creado lo que pretende ser el competidor directo de GitHub Copilot modo agente: *Jules* la nueva apuesta de Google en el campo de la IA para programación que promete ser un modelo asíncrono para tareas de programación avanzadas completamente integrado con tus repositorios de GitHub.

Este modelo de inteligencia artificial es parte de una nueva revolución de sistemas neuronales orientados a resolver tareas de código que como dice Google en la [web oficial](https://jules.google) de Jules "tú no quieres hacer". Estos modelos, se integran con bases de código como puede ser GitHub y crean *pull requests* en el repositorio asignado solucionando errores o simplemente completando las tareas que se les asignen.

> [Post oficial de Google](https://blog.google/technology/google-labs/jules/)

## Continúa el bloqueo indiscriminado de IPs en España

Desde hace meses LaLiga (organización de fútbol española) ha estado bloqueando masivamente IPs pertenecientes a la famosa compañía de servicios de protección contra ataques y clouding de páginas web [Cloudflare](https://cloudflare.com). Los motivos alegados para estos actos han sido que supuestamente esta compañía aloja sitios web dedicados a la reproducción ilegal del contenido multimedia asociado a LaLiga (básicamente, pirateando el fútbol). Estos actos ya han llevado a juicio a LaLiga en una ocasión, aunque en dicho juicio la compañía salió completamente impune y con el absoluto consentimiento del tribunal allí presente.

Aunque la compañía de fútbol española ganase el juicio derivado de una denuncia por parte de Cloudflare, estos actos que está acometiendo LaLiga son completamente ilegales y violan por completo las leyes sobre medios digitales de la Unión Europea. Por ahora no se sabe con certeza como va a acabar esta situación y mientras no se actúa más y más páginas web están sufriendo los efectos de estos actos.

## Cloudflare lanza D1, una nueva base de datos relacional global

No todo son malas noticias para la compañía estadounidense, Cloudflare lanza una nueva base de datos relacional enfocada para el trabajo con Workers, su servicio de construcción alojamiento de APIs y servicios de acceso via internet. Esta, promete ser una base de datos rápida, eficiente y con **soporte a nivel global** lo que la hace una excelente opción para el alojamiento de sistemas de almacenamiento de datos que precisan de la menor latencia posible.

Posee unos límites muy amplios hasta en el plan gratuito con 5 millones de lecturas y 100.000 escrituras al día y 5 GB de almacenamiento total. En el plan de pago se ofrecen 25 mil millones de lecturas más 0.01$ por cada millón extra y 50 millones de escrituras más 1$ por cada millón extra, todo esto al mes, además, el este plan se ofertan 5 GB de almacenamiento más 0.75$ por gigabyte extra al mes.

> [Documentación oficial de Cloudflare D1](https://developers.cloudflare.com/d1/platform/pricing/)

### Despedida

En este post hemos visto algunas de las muchas novedades en el mundo de la programación de este año 2025 pero es hora de despedirnos, ¡hasta el siguiente post 👋!