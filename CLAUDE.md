# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based turntable music player with realistic visual animations. Users upload local audio files and the app displays a vintage turntable with a spinning vinyl record and animated tonearm that moves across the record during playback.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview
```

## Architecture

### State Management Pattern

The entire audio state is centralized in **AudioContext** (`src/context/AudioContext.jsx`), which wraps the entire app. All components access audio state via the `useAudio()` hook. The context manages:

- Playlist array and current track index
- Playback state (playing/paused)
- Audio element reference (HTML5 Audio API)
- Volume, currentTime, duration
- All playback methods (play, pause, seek, next, previous)

**Important**: Audio playback is handled through a single `audioRef` (HTML5 Audio element) that persists across track changes. When switching tracks, the src is updated and the audio element is reloaded.

### Component Hierarchy

```
App (wrapped in AudioProvider)
├── Turntable (visual turntable component)
│   ├── TurntableBase (static wood base)
│   ├── VinylRecord (spinning disc with CSS animation)
│   └── Tonearm (animated arm that moves during playback)
├── Controls (playback controls)
│   ├── PlaylistControls (prev/next buttons)
│   ├── PlayPauseButton
│   ├── ProgressBar (seekable)
│   └── VolumeControl
└── Playlist
    ├── FileUpload (processes local audio files)
    └── PlaylistItem (individual tracks)
```

### Animation System

**Key principle**: Animations are CSS-based for performance, not JavaScript-driven.

1. **VinylRecord spinning**: Uses CSS `@keyframes spin` with `animation-play-state: paused` when not playing. This preserves the rotation position when paused instead of resetting to 0deg.

2. **Tonearm movement**: Two states controlled via inline styles in `Tonearm.jsx`:
   - **Resting**: `rotate(30deg) translateY(-8px)` (lifted and to the side)
   - **Playing**: `rotate(0-25deg) translateY(0)` where rotation is calculated from `progress * 25` to simulate the arm moving across the record

3. **Progress calculation**: The `progress` prop (0 to 1) is derived from `currentTime / duration` and passed from `AudioContext` → `Turntable` → `Tonearm`.

### File Upload Flow

1. User selects files via `<input type="file" accept="audio/*" multiple>`
2. `useFileUpload` hook processes each file:
   - Creates Object URL: `URL.createObjectURL(file)`
   - Extracts metadata (duration) using temporary Audio element
   - Builds track object: `{ id, title, url, duration, file }`
3. Tracks added to AudioContext playlist via `addTracksToPlaylist()`
4. **Memory management**: Object URLs are revoked when tracks are removed using `URL.revokeObjectURL(url)`

### CSS Theming

CSS custom properties defined in `src/index.css`:
- `--accent-color`: #f4a261 (orange, used for buttons and highlights)
- `--vinyl-label`: #e76f51 (red-orange for record label)
- `--turntable-wood`: #8b4513 (wood base color)
- `--primary-bg`, `--secondary-bg`, `--text-primary`, `--text-secondary`

### Responsive Breakpoints

- Desktop: >1024px - side-by-side layout (turntable | playlist)
- Tablet: 768-1024px - stacked layout, medium turntable
- Mobile: <768px - stacked layout, compact turntable and controls

## Important File Locations

- `index.html` - Must be in project root (not in public/), Vite entry point
- `src/main.jsx` - React entry point, renders App into #root
- `src/context/AudioContext.jsx` - Single source of truth for all audio state
- `src/components/Turntable/VinylRecord.css` - Contains critical `@keyframes spin` animation
- `src/components/Turntable/Tonearm.jsx` - Progress-based rotation calculation

## Adding New Features

**To add new playback controls**: Import `useAudio()` hook and access methods/state directly. All state updates automatically propagate to all components via Context.

**To modify animations**: Edit CSS in respective component `.css` files. Turntable animations use `transform` and `transition` properties for smooth hardware-accelerated performance.

**To extend audio functionality**: Modify `AudioContext.jsx` to add new state/methods, then expose via the context value object.
