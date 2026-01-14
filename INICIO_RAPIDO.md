# Inicio Rápido - Reproductor de Tocadiscos

## Ejecutar el Proyecto

### 1. Asegúrate de tener Node.js configurado

Si Node.js fue instalado manualmente en `~/.local/node`, asegúrate de que esté en tu PATH:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

O simplemente abre una nueva terminal (ya está en tu `.zshrc`).

### 2. Instalar dependencias (solo la primera vez)

```bash
cd /Users/lucho/curso_claude
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El servidor iniciará en **http://localhost:5173**

### 4. Abrir en el navegador

Abre tu navegador y ve a: **http://localhost:5173/**

### 5. Usar el reproductor

1. Haz clic en **"+ Agregar Canciones"**
2. Selecciona archivos de audio (MP3, WAV, OGG, etc.)
3. Haz clic en una canción para reproducirla
4. Disfruta del vinilo girando y la aguja moviéndose

## Detener el Servidor

Presiona **Ctrl + C** en la terminal donde está corriendo `npm run dev`

## Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción (carpeta dist/)
npm run preview      # Previsualiza la build de producción

# Verificar Node.js
node --version       # Debería mostrar v22.12.0
npm --version        # Debería mostrar v10.9.0
```

## Solución de Problemas

### Error 404 al abrir http://localhost:5173
- Verifica que `index.html` esté en la raíz del proyecto (no en `public/`)
- Recarga la página con Ctrl+Shift+R o Cmd+Shift+R

### "command not found: npm"
- Ejecuta: `export PATH="$HOME/.local/node/bin:$PATH"`
- O abre una nueva terminal

### El vinilo no gira
- Verifica que hayas dado Play (botón circular naranja)
- Asegúrate de que hay una canción cargada en la playlist

### No se cargan las canciones
- Verifica que los archivos sean de audio válidos
- Abre la consola del navegador (F12) para ver errores
