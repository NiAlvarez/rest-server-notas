Esta es una pequeña API que sirve para:
        - Cargar la informacion de todos los alumnos (nombre, apellido y nota) hacia una base de datos.
        - Observar la informacion de los alumnos aprobados
        - Observar la informacion de TODOS los alumnos

Para ejecutar esta API en un entorno local:

1) ``` npm install ```
2) Crear una collection en MongoDB con el nombre de "Alumnos"

Los comandos son:

 POST: crear alumno, // Necesita recibir las claves y valores de "primerNombre, apellido, nota"
 GET: alumnos,
 GET: aprobados.

Tanto la base de datos como el proyecto YA ESTAN DEPLOYADOS. Con hacer las peticiones en Postman ya están bien :)

Deploy del proyecto en Heroku:  https://nota-alumnos.herokuapp.com/