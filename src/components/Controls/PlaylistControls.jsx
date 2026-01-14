import React from 'react';
import { useAudio } from '../../context/AudioContext';

const PlaylistControls = () => {
  const { previousTrack, nextTrack, toggleShuffle, isShuffle, playlist } = useAudio();

  return (
    <div className="playlist-controls">
      <button
        className="control-button"
        onClick={previousTrack}
        disabled={playlist.length === 0}
        aria-label="Canción anterior"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
        </svg>
      </button>
      <button
        className="control-button"
        onClick={nextTrack}
        disabled={playlist.length === 0}
        aria-label="Siguiente canción"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
        </svg>
      </button>
      <button
        className={`control-button shuffle-button ${isShuffle ? 'active' : ''}`}
        onClick={toggleShuffle}
        disabled={playlist.length === 0}
        aria-label="Reproducción aleatoria"
        title={isShuffle ? 'Desactivar aleatorio' : 'Activar aleatorio'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
        </svg>
      </button>
    </div>
  );
};

export default PlaylistControls;
