# Proyecto Parcial - Aplicación de Deportes

## Descripción

En este parcial, desarrollé una aplicación en React que simula la gestión de actividades deportivas, mostrando sesiones de deportes que practica el usuario y permite cambiar el idioma de la interfaz de usuario entre inglés y español. La aplicación tiene varios componentes que manejan diferentes funcionalidades, incluyendo la visualización de tarjetas deportivas, un perfil de usuario, verificacion de inicio de sesión, además de un sistema de internacionalización.

### Decisiones Tomadas

### 1. Api

Inicialmente, intente implmentar Mockaroo como un servicio externo para generar datos de prueba a través de una API. Pero, debido a la limitación de tiempo durante el parcial, no logré implementar la conexión con la API en Mockaroo. Y pues decidí simular los datos directamente dentro de un servicio con los datos en el componente `UserService`. Esto me permitió seguir desarrollando la aplicación sin la necesidad de una conexión real a una API, pero manteniendo la funcionalidad simulada para obtener datos.

### 2. I18n

Uno de los requisitos del parcial era implementar la funcionalidad de multilenguaje. Para esto, usé `react-i18next` y configuré archivos de traducción en JSON dentro de una carpeta llamada `Locales`. Las traducciones en inglés y español se encuentran organizadas en estos archivos, y mediante un botón en el footer de la aplicación, el usuario puede cambiar el idioma en cualquier momento. Para pasar las traducciones a través de los distintos componentes, utilicé el hook `useTranslation` de `react-i18next`. Con eso se logro que todos los labels estaticos, reaccionaran a la elección del lenguaje.

### 3. Diseño

Cuando resolví el preparcial, los estilos los hice con CSS. En este parcial, opté por seguir con la misma lógica, y aunque Bootstrap hubiera facilitado ciertas partes del diseño, preferí usar CSS, porque con eso fue que repase, y pues la ventaja fue que me permitió aplicar clases personalizadas para resolver el diseño.

## Componentes Utilizados

### 1. `App.js`

Este es el componente principal que maneja las rutas de la aplicación. Utilicé `react-router-dom` para manejar la navegación entre la página de inicio de sesión y la página principal de la aplicación. También integré el footer en este archivo, asegurándome de que el botón para cambiar el idioma siempre esté visible en la parte inferior de la pantalla.

### 2. `UserProfile.js`

Este componente muestra la información del usuario, incluyendo su nombre, imagen de perfil y sus mejores tiempos en ciclismo, carrera y natación. La información del usuario se simula en un archivo de datos estáticos.

### 3. `SportCards.js`

Este componente es responsable de mostrar las tarjetas de actividades deportivas. Las actividades se muestran en columnas, con una tarjeta grande en la parte superior y varias más pequeñas debajo. Cada deporte tiene su propia columna (ciclismo, carrera, natación), y al hacer clic en una tarjeta, aparece un modal con más detalles sobre la actividad.

### 4. `Detalle.js`

Este componente representa un modal que aparece cuando el usuario hace clic en una tarjeta de actividad. Aquí se muestran detalles como el deporte, la distancia, la duración y la ciudad del recorrido.

### 5. `Login.js`

Este componente simula una página de inicio de sesión. Utiliza `react-hook-form` para manejar la validación del formulario y el control de los campos de email y contraseña. Aunque no se conecta a un backend, el formulario valida los datos y permite la navegación a la página principal si se ingresan correctamente.

### 6. `BotonLang.js`

Este pequeño componente maneja la funcionalidad de cambio de idioma en la aplicación. Utiliza el hook `useTranslation` para cambiar entre los lenguajes disponibles (inglés y español) al hacer clic en los botones.

## Pasos para la Ejecución

1. **Clonar el Repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```
2. **Instalar las Dependencias:**
   Una vez dentro del proyecto, es necesario para el funcionamiento instalar todas las dependencias utilizando los siguientes comandos:

   ```bash
   npm install
   npm install react-router-dom
   npm install i18next react-i18next
   npm install react-hook-form
   ```
3. **Ejecutar la Aplicación:**
   Para iniciar la aplicación utiliza el siguiente comando:

   ```bash
   npm start
   ```
4. **Navegar en la Aplicación:**
   La aplicación abrirá en tu navegador en `http://localhost:3000/`. Inicialmente, verás la página de inicio de sesión. Al ingresar cualquier correo y contraseña válidos(correo con formato correcto y contraseña con por lo menos una longitud de 8 caracteres, con un símbolo, dos mayúsculas y una minúscula), luego serás redirigido a la página principal, donde podrás ver las actividades deportivas simuladas.
5. **Cambio de Idioma:**
   En la parte inferior de la pantalla, verás botones para cambiar el idioma entre inglés y español. Al hacer clic en estos botones, el contenido de la aplicación se traducirá automáticamente según el idioma seleccionado.

## Desafíos y Aprendizajes

Durante el desarrollo de esta aplicación, enfrenté algunos desafíos relacionados con la integración de `i18next`, la gestión de datos simulados, y el diseño responsivo utilizando CSS. 

En cuanto a los datos, al no poder integrar la API de Mockaroo por falta de tiempo, simulé los datos en un servicio de React para poder continuar con el desarrollo de la aplicación y cumplir con la funcionalidad requerida.

Para concluir el parcial me permitio afianzar los conocimientos de React, la gestión de formularios y validaciones, el uso de `i18next` para la internacionalización, y la gestión de datos simulados dentro de componentes.
