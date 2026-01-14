# Frontend Design Skill - Instalado ✅

## Qué es este Skill

El skill **frontend-design** es una extensión de Claude Code que mejora la capacidad de Claude para crear interfaces frontend distintivas, de alta calidad y con un diseño excepcional. Evita estéticas genéricas de IA y genera código con atención meticulosa a los detalles estéticos.

## Estado de Instalación

✅ **Claude CLI instalado**: v2.1.7
✅ **Marketplace oficial agregado**: claude-code-plugins
✅ **Skill frontend-design instalado**: Activo

## Cómo Usar el Skill

### En Claude Code (línea de comandos)

Simplemente menciona en tu prompt que quieres crear un componente frontend o interface:

```bash
claude "Crea un componente de card de producto con diseño distintivo"
```

El skill se activará automáticamente cuando detecte que estás pidiendo crear interfaces frontend.

### Principios del Skill

El skill guiará a Claude para:

1. **Pensar en diseño primero** - Considerar el propósito, audiencia y tono antes de codificar
2. **Elegir direcciones estéticas BOLD** - Minimalismo brutal, maximalismo caótico, retro-futurista, etc.
3. **Evitar lo genérico**:
   - ❌ Fuentes genéricas (Inter, Roboto, Arial)
   - ❌ Gradientes púrpura sobre fondo blanco
   - ❌ Layouts predecibles
   - ✅ Fuentes distintivas y hermosas
   - ✅ Paletas cohesivas con acentos fuertes
   - ✅ Layouts inesperados y asimétricos

### Áreas de Enfoque

**Tipografía**: Fuentes únicas e interesantes, no genéricas

**Color & Tema**: Estética cohesiva con variables CSS, colores dominantes con acentos fuertes

**Movimiento**: Animaciones CSS para efectos y micro-interacciones. Motion library para React cuando esté disponible.

**Composición Espacial**: Layouts inesperados, asimetría, superposición, flujo diagonal

**Backgrounds & Detalles Visuales**: Gradientes mesh, texturas, patrones geométricos, transparencias en capas, sombras dramáticas

## Ejemplos de Uso

### Crear un componente distintivo

```bash
claude "Diseña un hero section para una app de música con estética retro-futurista"
```

### Mejorar el diseño de este proyecto

```bash
cd /Users/lucho/curso_claude
claude "Mejora el diseño del reproductor de tocadiscos con más personalidad visual"
```

### Crear una página completa

```bash
claude "Crea una landing page para una marca de café con diseño editorial/magazine"
```

## Comandos de Gestión del Plugin

```bash
# Ver plugins instalados
claude plugin marketplace list

# Actualizar el plugin
claude plugin update frontend-design

# Deshabilitar el plugin temporalmente
claude plugin disable frontend-design

# Habilitar el plugin
claude plugin enable frontend-design

# Desinstalar el plugin
claude plugin uninstall frontend-design
```

## Notas Importantes

- El skill se activa automáticamente cuando pides crear componentes, páginas o aplicaciones web
- Funciona con HTML/CSS/JS vanilla, React, Vue y otros frameworks
- Genera código funcional y de calidad de producción
- Cada diseño será único y variado - no repetirá estilos

## Integración con este Proyecto

Puedes usar este skill para mejorar el reproductor de tocadiscos:

```bash
cd /Users/lucho/curso_claude
claude "Mejora visualmente el componente VinylRecord con efectos más realistas y detallados"
```

O para crear nuevos componentes:

```bash
claude "Crea un componente de visualizador de audio con estética brutalista"
```

---

**Documentación completa**: https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md
