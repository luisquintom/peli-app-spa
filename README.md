# Películas App - Versión SPA (React + React Router DOM)

Esta es la primera parte de la Práctica 2 de React. Se trata de una aplicación web para explorar películas utilizando la API de **The Movie Database (TMDB)**, desarrollada bajo el enfoque de **Single Page Application (SPA)**.

## Funcionalidades

- **Página de Inicio (`/`)**: Listado de las películas más populares del momento.
- **Buscador (`/search`)**: Permite filtrar películas por título.
- **Detalle de Película (`/movie/:id`)**: Información extendida (sinopsis, calificación y poster).
- **Navegación Fluida**: Gestión de rutas en el lado del cliente con `react-router-dom`.

## Tecnologías Utilizadas

- **React 18** 
- **React Router DOM** (Gestión de enrutamiento)
- **TMDB API** (Fuente de datos)
- **CSS Nativo** (Estilos básicos)

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/luisquintom/peli-app-spa
cd peli-app-spa
```
2. **Instalar dependencias:**

```Bash
npm install
```
Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade tu API Key de TMDB:

Fragmento de código
```bash
VITE_TMDB_KEY=tu_api_key
```
Lanzar la aplicación:

```Bash
npm run dev
```
La aplicación estará disponible en http://localhost:5173.

## Estructura del Proyecto 
Plaintext
```src/
 ├── components/   # Componentes reutilizables (Navbar)
 ├── pages/        # Vistas principales (Home, MovieDetail, SearchResults)
 ├── services/     # Lógica de conexión con la API (fetch)
 ├── App.jsx       # Configuración de rutas
 └── main.jsx      # Punto de entrada de React
```
Desarrollado por: Luis Enrique Q.