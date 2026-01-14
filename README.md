# Reproductor de Tocadiscos

Un reproductor de música web con un diseño visual de tocadiscos vintage, incluyendo animaciones realistas del vinilo girando y la aguja moviéndose.

## Características

- Diseño visual de tocadiscos realista
- Disco de vinilo que gira con animación CSS fluida
- Aguja/brazo que se mueve animadamente durante la reproducción
- Controles completos de reproducción:
  - Play/Pause
  - Control de volumen
  - Barra de progreso con funcionalidad de seek
  - Navegación de playlist (anterior/siguiente)
- Carga de archivos de audio locales
- Diseño responsive (desktop, tablet, mobile)

## Requisitos Previos

Necesitas tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (viene incluido con Node.js)

## Instalación

1. Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El reproductor estará disponible en `http://localhost:5173` (el puerto puede variar).

## Cómo Usar

1. Haz clic en el botón "**+ Agregar Canciones**" en la sección de playlist
2. Selecciona uno o más archivos de audio de tu computadora (MP3, WAV, OGG, etc.)
3. Las canciones aparecerán en la playlist
4. Haz clic en una canción para reproducirla
5. Disfruta viendo el vinilo girar y la aguja moverse

### Controles

- **Play/Pause**: Botón circular grande (centro)
- **Anterior/Siguiente**: Botones con flechas a los lados del play
- **Volumen**: Slider con icono de altavoz
- **Progreso**: Barra de progreso debajo del botón de play (haz clic para saltar a una posición)
- **Eliminar canción**: Botón "×" en cada item de la playlist

## Animaciones

- **Vinilo**: Gira continuamente cuando hay reproducción activa. Al pausar, mantiene su posición actual
- **Aguja**: Se mueve sobre el disco al reproducir y regresa a posición de reposo al pausar
- **Progreso de aguja**: Durante la reproducción, la aguja rota gradualmente de 0° a 25° simulando el avance sobre el disco

## Tecnologías

- **React** - Framework UI
- **Vite** - Build tool y dev server
- **HTML5 Audio API** - Reproducción de audio
- **CSS3** - Animaciones y estilos
- **Context API** - Gestión de estado

## Estructura del Proyecto

```
src/
├── components/
│   ├── Turntable/        # Componentes visuales del tocadiscos
│   ├── Controls/         # Controles de reproducción
│   ├── Playlist/         # Gestión de playlist
│   └── App.jsx          # Componente principal
├── context/
│   └── AudioContext.jsx  # Estado global de audio
├── hooks/               # Custom hooks
├── utils/              # Utilidades
└── main.jsx           # Punto de entrada
```

## Build para Producción

Para crear una build de producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

Para previsualizar la build:

```bash
npm run preview
```

## Soporte de Navegadores

- Chrome/Edge (versiones recientes)
- Firefox (versiones recientes)
- Safari (versiones recientes)

## Licencia

MIT

---

Hecho con React y CSS
