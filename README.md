# README TAREA 2

## Proceso de creación:

#### BASE DE DATOS
Primero, se adaptó la base de datos al proyecto, se modificaron 2 tablas:

-  A la tabla voluntario se le agregó el atributo contraseña con:
```SQL
ALTER TABLE voluntario
ADD COLUMN password VARCHAR(255) NOT NULL;
``` 
- A la tabla avistamiento se le eliminó el atributo lugar y en cambio se puso el atributo comuna_id con
```SQL
ALTER TABLE avistamiento
DROP COLUMN lugar;

ALTER TABLE avistamiento
ADD COLUMN comuna_id INT NOT NULL
FOREIGN KEY (comuna_id) REFERENCES comuna(id);
```
También se hizo una breve query sql para resetear los elementos de la tabla:
```SQL
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE registro;
TRUNCATE TABLE avistamiento;
TRUNCATE TABLE voluntario;
SET FOREIGN_KEY_CHECKS = 1;
```

#### Javascript y macros:
Para la app, se inició adaptando las rutas en el archivo app.py, también, se paso a un modelo mucho mas modular, creeando macros de jinja para componentes del sitio web y así ahorrarse de repetir código. También se hicieron mejoras en las validaciones de javascript, creando el módulo validators y se hicieron mejoras en las validaciones con javascript. Las validaciones del lado del servidor se hicieron con un módulo de python creado llamado validators, donde se agruparon todas las funciones referentes a este tema.

Para la asociación con la base de datos, se hicieron las clases en la carpeta models de cada tabla con sus respectivos atributos, relaciones y métodos.

#### Sitio home:
- Para el menú se ubicaron las opciones con la etiqueta a, y para el listado de los últimos avistamientos, se creó una función en python con firma *getLast(i)*, que retornaba los últimos *i* avistamientos ordenado por fecha y luego con un for de jinja se muestran las tarjetas de los avistamientos.

#### Sitio register:
- Se utilizó el formulario de la tarea 1 pero utilizando macros de jinja, luego se mandaron los datos con el método POST y al recibirlo el servidor validaba con las funciones del módulo validators. En caso de no ser válido, mandaba al formulario con los mensajes de error correspondientes, esto se hizo con un diccionario del estilo *{id:errmsg}*, y se mantuvieron los valores del formulario con el método request.form. Finalmente si la validación resultaba exitosa, guardaba en la base de datos, la contraseña la guardaba con un hash del módulo *werkzeug.security*.

#### Sitio newsight:
- Se renovó el formulario con las macros de jinja y se agregó un inicio de sesión, con usuario y contraseña para el voluntario que declara el avistamiento, también se eliminó el nombre de avistamiento, pues la base de datos no tenía para guardarlo y no se le dio importancia.

#### Sitio success:
- Se hizo como un sitio intermedio tras enviar un formulario, recibe un parámetro para ver de que formulario viene y saber que mensaje mostrar.

#### Sitio birds (listado de avistamientos):
- Los avistamientos se representan como tarjetas con nombre, imagen y descripción, al seleccionar uno, se muestran los detalles en una tarjeta mas grande.

- La vista en páginas se hizo con el método paginate de SQLAlchemy, 

- Se usaron los parámetros de url para los filtros y para la selección de una tarjeta específica.

#### Sitio stats:
- Se mantuvo igual que antes, solo se ajustaron las rutas y se hizo una macro de jinja para exponerlo en tarjetas.

#### Pruebas:
- El sitio web se probó en windows con brave y edge, debian con firefox, iphone con chrome y android con chrome.

<hr>

#### Iconos:
- https://www.flaticon.com/free-icons/social-media