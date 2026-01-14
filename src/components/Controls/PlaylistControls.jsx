import React from 'react';
import { useAudio } from '../../context/AudioContext';

const PlaylistControls = () => {
  const { previousTrack, nextTrack, playlist } = useAudio();

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
    </div>
  );
};

export default PlaylistControls;
