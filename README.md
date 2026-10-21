# README TAREA 3

## Desarrollo:

Primero se agregó la tabla de comentario con el script incluido en la tarea. Luego se hizo la sección de comentarios y finalmente la sección de estadísticas. En esta tarea quedó un acabado mucho menos prolijo en el aspecto gráfico. 

### Sección de comentarios:
- La sección de comentarios se hizo con un formulario y un script, el script mandaba los datos del formulario tras validarlos a una URL de flask por medio del objeto XHR de JavaScript, luego en Python se repetían las validaciones y mandaba un mensaje de éxito si se agregó a la base de datos o rechazo si no.

- Para obtener los comentarios se hizo una función de javascript que se los solicitaba a una URL con el id del avistamiento y luego se mostraban. Se tomó la precaución de mostrar los comentarios con el método de textContent en vez de modificar directamente el HTML para evitar inputs maliciosos.

### Sección de estadísticas:
- Se utilizó la librería de highcharts para hacer los gráficos, los datos se obtuvieron imitando el método de la obtención de lista de comentarios, extrayendo los datos de la base de datos con SQLAlchemy.


#### Pruebas:
- El sitio web se probó en windows con brave y edge, Arch linux con firefox, iPhone con chrome y android con chrome.


<hr>
#### Iconos:
- https://www.flaticon.com/free-icons/social-media
