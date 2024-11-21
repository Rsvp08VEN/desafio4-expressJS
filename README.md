API REST Usuarios - Desafío 4
Descripción

Esta es una API REST creada como parte del Desafío 4 para implementar operaciones CRUD y autenticación con JSON Web Tokens (JWT) utilizando Express.js y MySQL.

Permite realizar las siguientes funcionalidades:

Operaciones CRUD sobre usuarios.
Autenticación de usuarios mediante JWT.
Acceso a rutas protegidas como dashboard y detail verificando la validez del token.
La API está diseñada para ser fácil de probar y desplegar en servicios como Railway o Render.

Características

Tecnologías utilizadas:
Node.js
Express.js
MySQL
JWT para autenticación
Variables de entorno (.env) para configuración

Rutas principales:

CRUD: Crear, leer, actualizar y eliminar usuarios.
Login: Generar un JWT para autenticación.
Dashboard: Ruta protegida que verifica el token.
Detail: Muestra información específica de un usuario por su id.

Requisitos previos

Asegúrate de tener instalados los siguientes elementos:

Node.js (v14 o superior)
npm (gestor de paquetes de Node.js)
MySQL (para la base de datos)

Instalación

Clona este repositorio en tu máquina local: git clone https://github.com/Rsvp08VEN/desafio4-expressJS.git

Accede al directorio del proyecto: cd tu-proyecto

Instala las dependencias del proyecto: npm install

Configura las variables de entorno:

Renombra el archivo .env.example a .env.

Llena las variables de entorno con tus datos reales:

DB_HOST=tu-host
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_NAME=nombre-de-tu-base
DB_PORT=3306

JWT_SECRET=tu-secreto
JWT_EXPIRES_IN=1m

Asegúrate de tener la base de datos configurada:

Crea una base de datos MySQL con el esquema correspondiente (consulta el archivo instruccionesAPI.txt).

Inicia el servidor: npm start

La API estará disponible en: http://localhost:3000.

Endpoints principales

Método 	  Ruta	                    Descripción
POST	/api/login	        Autentica un usuario y genera un JWT.
GET	    /api/dashboard	    Ruta protegida. Verifica que el JWT sea válido antes de devolver la respuesta.
GET	    /api/detail/:id	    Ruta protegida. Muestra el detalle del usuario con el ID especificado.

Para las rutas CRUD de usuarios, consulta la colección en Postman:

Enlace a la documentación en Postman

Pruebas
Puedes probar esta API utilizando Postman siguiendo estos pasos:

Descarga la colección de pruebas desde este enlace.
Importa la colección en Postman.
Ajusta las variables de entorno de Postman con la URL del servidor (local o desplegado).
Despliegue

Esta API puede ser desplegada en servicios como Railway o Render. Sigue estos pasos para desplegar:

Sube el proyecto a GitHub.
Conecta tu repositorio a Railway/Render.
Configura las variables de entorno en el servicio de despliegue.
Obtén la URL pública y actualiza tu colección de Postman para apuntar a esa URL.
Licencia

Este proyecto es parte de un desafío educativo y no tiene fines comerciales.