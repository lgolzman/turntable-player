import React from 'react';
import { useAudio } from '../../context/AudioContext';

const PlayPauseButton = () => {
  const { isPlaying, togglePlay, playlist } = useAudio();

  return (
    <button
      className="play-pause-button"
      onClick={togglePlay}
      disabled={playlist.length === 0}
      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
    >
      {isPlaying ? (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </button>
  );
};

export default PlayPauseButton;
