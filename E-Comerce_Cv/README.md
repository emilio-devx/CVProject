# E-Commerce CV

Proyecto de portfolio orientado a una candidatura frontend, centrado en la construccion de una home de e-commerce de patines con React y Tailwind CSS.

## Sobre el proyecto

Esta aplicacion forma parte de mi proceso de aprendizaje en React. El objetivo no es solo replicar una interfaz visual atractiva, sino practicar conceptos reales de frontend como:

- consumo de APIs con `fetch`
- gestion de estado con `useState`
- efectos secundarios con `useEffect`
- composicion de layouts con Tailwind CSS
- integracion entre cliente React y servidor Express

Actualmente la portada incluye un hero con carrusel de imagenes dinamicas obtenido desde Pexels a traves de un backend propio en Express.

## Stack

- React 19
- Vite
- Tailwind CSS 4
- React Icons
- Express
- Node Fetch
- Pexels API

## Estructura

```text
E-Comerce_Cv/
  src/       -> interfaz en React
  public/    -> recursos publicos
  server/    -> backend Express para consultar la API de Pexels
```

## Funcionalidades actuales

- Header responsive con buscador, acceso a cuenta y cesta
- Modal de inicio de sesion
- Panel lateral para la cesta
- Hero principal con carrusel automatico
- Navegacion manual del carrusel con flechas
- Carga dinamica de imagenes desde el servidor local
- Grid inicial de productos para seguir construyendo la portada

## Proximos pasos

- completar las cards de producto con datos mas realistas
- mejorar la composicion visual estilo landing de e-commerce
- anadir valoraciones, precios y llamadas a la accion
- conectar mejor la zona de productos con una logica de catálogo
- reforzar la adaptacion a movil (responsive)

## Instalacion

### 1. Instalar dependencias del frontend

```bash
npm install
```

### 2. Instalar dependencias del servidor

```bash
cd server
npm install
```

### 3. Configurar variables de entorno

Dentro de `server/` crea un archivo `.env` con tu clave de Pexels:

```env
PEXELS_API_KEY=tu_api_key
```

### 4. Iniciar el servidor

```bash
cd server
node index.js
```

### 5. Iniciar el frontend

```bash
npm run dev
```

## Aprendizajes

Este proyecto me esta sirviendo para practicar de forma aplicada:

- diferencia entre `async`, `await` y promesas
- consumo de endpoints desde React
- separacion entre frontend y backend
- renderizado de listas con `.map()`
- composicion de carruseles y layouts complejos en Tailwind

## Estado

Proyecto en desarrollo. Lo uso como pieza de portfolio y como entorno de practica para afianzar React, Tailwind y consumo de APIs.
