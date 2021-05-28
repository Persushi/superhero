SuperHero APP 

Aplicación sencilla consumiendo api https://superheroapi.com/ 
para usar se debe guardar el token de superheroapi en un archivo .env en la carpeta raiz con el nombre REACT_APP_APIKEY, npm install, npm start
los datos de login son
Email: challenge@alkemy.org
Password: react

Redirección al login, iniciada la sesión guarda un Token en el localstorage, datos de equipo tambien guardados en el localstorage
busqueda de superheroes con un par de validaciones para evitar errores usando Formik

Funcionamientos:

En la pantalla inicial se puede desplegar el equipo de hasta 6 personajes, máximo 3 orientación buena y 3 orientación mala (orientación neutral se salta este requisito), tanto en la busqueda como en el equipo se puede ver los detalles, acumulativo de Stats por equipo y promedios, eliminación de personajes de la plantilla.

La Navbar incluye el input de busqueda por nombre

Los detalles llevan a un componente con más datos de cada personaje

Se usó algo de Bootstrap para el diseño responsive
