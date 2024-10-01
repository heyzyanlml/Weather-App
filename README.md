# 🌤️ Weather App

## 📄 Descripción del Proyecto y su Funcionalidad

Bienvenido a **Weather App**, una aplicación desarrollada para proporcionar información meteorológica en tiempo real, utilizando la API de **WeatherAPI**. La aplicación permite a los usuarios buscar el clima de cualquier ciudad alrededor del mundo, así como obtener el clima actual basado en la ubicación geográfica del usuario.

La aplicación se inicia mostrando el clima en **Tokio** como valor predeterminado, pero permite a los usuarios ingresar cualquier ciudad para obtener el clima correspondiente. También incluye la funcionalidad de mostrar el pronóstico por hora para las próximas **24 horas**.

## 🎯 Objetivo del Proyecto

El objetivo principal de esta aplicación es practicar la integración de **APIs** con **JavaScript** y el manejo de **promesas**, así como implementar la **geolocalización** del navegador para obtener el clima actual del usuario. Además, se trabajó en la manipulación del **DOM** para mostrar la información meteorológica de forma dinámica, tanto para la ciudad ingresada como para la ubicación del usuario.

## 🌐 Características del Proyecto

### 📍 Obtener Clima de la Ubicación Actual

El usuario puede hacer clic en el botón de ubicación para obtener el clima de su ubicación actual, utilizando la API de **geolocalización** del navegador. Si el usuario rechaza el acceso a su ubicación, se muestra un mensaje de error.

### 🏙️ Clima por Ciudad

La aplicación carga el clima de **Tokio** como ciudad predeterminada, pero los usuarios pueden ingresar el nombre de cualquier ciudad en el campo de búsqueda. El sistema obtiene el clima actual y el pronóstico por hora de la ciudad ingresada. Si la ciudad no se encuentra, se muestra un mensaje de error.

### 🕐 Pronóstico por Hora

La aplicación muestra el pronóstico por hora para las próximas **24 horas**. Cada hora muestra la temperatura y un icono representativo del clima de acuerdo con el código de la API.

### ⚠️ Mensajes de Error

Si el sistema no puede encontrar la ciudad ingresada o hay un problema con la API, se muestra un mensaje que indica que ocurrió un error y se sugiere intentar nuevamente.

### 💻 Interfaz Responsiva

El diseño de la aplicación es completamente **responsivo** y se adapta a diferentes tamaños de pantalla, desde móviles hasta dispositivos de escritorio.

### 🚀 Integración con API (WeatherAPI)

La aplicación utiliza la API de **WeatherAPI** para obtener información meteorológica actualizada. Las peticiones a la API se manejan de forma asíncrona utilizando **promesas**, lo que permite obtener datos de manera eficiente.

## 🛠️ Tecnologías y Técnicas Utilizadas

- **HTML**: Estructura semántica de la página.
- **CSS**: Estilos personalizados y media queries para un diseño responsivo.
- **JavaScript**: Integración con API, manejo de geolocalización y promesas.
- **APIs**: Uso de **WeatherAPI** para obtener la información meteorológica.
- **Geolocalización**: Utilización de la API de geolocalización del navegador para obtener la ubicación actual del usuario.
- **Promesas**: Uso de promesas para manejar la carga de datos asíncronos y controlar errores.
- **Google Fonts**: Uso de iconos personalizados a través de Google Fonts.
- **Manipulación del DOM**: Creación y actualización dinámica del contenido de la página basado en los datos obtenidos de la API.

## 📋 Funcionalidades Implementadas

### 🔍 Búsqueda de Clima por Ciudad

- Los usuarios pueden ingresar el nombre de cualquier ciudad en el campo de búsqueda.
- Si la ciudad es válida, el sistema muestra el clima actual y el pronóstico por hora.
- Si la ciudad no es encontrada, se muestra un mensaje de error personalizado.

### 🌍 Geolocalización del Usuario

- Los usuarios pueden hacer clic en el botón de ubicación para obtener el clima de su ubicación actual.
- El sistema utiliza la API de **geolocalización** del navegador para obtener las coordenadas y luego envía una solicitud a la API de **WeatherAPI**.
- Si el usuario no otorga permisos de geolocalización o ocurre un error, se muestra un mensaje de error.

### 🕑 Pronóstico por Hora

- Se muestra el pronóstico por hora de las próximas **24 horas**, mostrando tanto la temperatura como un icono que representa las condiciones meteorológicas.
- Los iconos se ajustan dinámicamente según el código de condición de la API.

### ⚠️ Manejo de Errores

- La aplicación maneja errores como ciudades no encontradas o fallas en la conexión a la API, y muestra un mensaje amigable que sugiere volver a intentar o corregir la búsqueda.

## 🚀 Conocimientos Aplicados

Este proyecto ha permitido aplicar y reforzar varias habilidades clave:

- **Integración de APIs**: Manejo de peticiones HTTP para obtener datos en tiempo real desde un servidor externo.
- **Promesas en JavaScript**: Uso de promesas para manejar operaciones asíncronas como la obtención de datos de una API.
- **Manipulación del DOM**: Actualización dinámica del contenido basado en la respuesta de la API y la interacción del usuario.
- **Geolocalización**: Implementación de la API de geolocalización para obtener la ubicación actual del usuario.
- **CSS Responsivo**: Diseño adaptado a diferentes dispositivos y pantallas usando media queries.
- **Manejo de errores**: Mensajes claros y específicos cuando ocurren errores, ya sea en la búsqueda de una ciudad o en la geolocalización.
- **Eficiencia con la API**: Control del flujo de datos asíncronos y la visualización dinámica de resultados en la página.
