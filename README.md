## README TAREA 1

### Proceso de creación:
En primer lugar, se decidió hacer un display de imágenes en la página principal y la navegación, el logo y título y el footer con una descripción genérica y redes sociales genéricas igual. Para esto último, se hizo un template (archivo .template) y en el archivo layout.js se hizo un script para que estuviera en todas las páginas del sitio web. Luego, se hizo un pseudo inicio de sesión, que valida para evitar símbolos extraños nada más, pues la tarea está enfocada en la interfaz.

Después, se hizo la página de registro de cuenta, donde se hicieron las verificaciones en su mayoría con el uso de expresiones regulares, para controlar a la vez los caracteres permitidos y el largo del input. También se hizo con javascript un selector de región y comuna con un json encontrado en github, luego se tuvo que copiar el contenido en el script de javascript, pues el método fetch solo funciona con un servidor.

Posteriormente, se hizo la página de avistamientos, donde se hizo la interfaz de filtros, tarjetas de cómo se representarían los avistamientos en el sitio y un botón para agregar un avistamiento. También, se hizo el formulario para agregar un nuevo avistamiento, donde nuevamente se usaron expresiones regulares para verificar cada campo. Se reutilizaron los selectores de comuna y región y también se agrego un input de archivo, donde se limitó la cantidad, el tipo de archivo con expresiones regulares y se hizo una pequeña previsualización.

Finalmente, para la parte de métricas, se generaron gráficos aleatorios en python con matplotlib, se utilizaron distribuciones estadísticas conocidas para crear los datos aleatorios y se asignó valor a cada eje, se agregó un "link al estudio" genérico que lleva a la página de inicio pues no hay estudio como tal pero es solamente representativo y es importante para la interfaz. También se puso un link de descarga de la base de datos que igualmente dirige al sitio de inicio. 

El sitio fue validado con el validador de la W3C y pasó sin errores ni advertencias. También se comprobó el funcionamiento en los navegadores: Opera, Chrome, Windows Edge y Chrome para iPhone y no hubo problemas mas que un ligeramentee extraño escalamiento en las imágenes en el navegador móvil.
<hr>

## Fuentes:

##### Imágenes:
- https://pixabay.com/es/photos/gorrión-cantor-patio-interior-pájaro-7942522/

- https://pixabay.com/es/photos/cóndor-al-colcacanon-libertad-1087026/

- https://pixabay.com/es/photos/gorrión-pájaro-pretil-animal-5875379/

- https://pixabay.com/es/photos/aves-rama-pájaros-salvajes-7376432/

- https://pixabay.com/es/photos/pollo-p%C3%A1jaro-aves-terrestres-plumas-1314888/

- https://pixabay.com/es/photos/p%C3%A1jaro-zorzal-turdus-rufiventris-10425007/

- https://pixabay.com/es/photos/flamencos-aves-pareja-par-vuelo-1835649/

#### Iconos:

- https://www.flaticon.com/free-icons/social-media

##### Json:
- https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/305cb2893a0e481a2a26ff9b39b70bfadf035cd1/comunas-regiones.json
