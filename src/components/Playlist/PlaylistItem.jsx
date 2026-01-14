import React from 'react';
import { formatTime } from '../../utils/formatTime';

const PlaylistItem = ({ track, index, isActive, onPlay, onRemove }) => {
  return (
    <div
      className={`playlist-item ${isActive ? 'active' : ''}`}
      onClick={() => onPlay(index)}
    >
      <div className="track-info">
        <span className="track-number">{index + 1}</span>
        <span className="track-title">{track.title}</span>
      </div>
      <div className="track-actions">
        <span className="track-duration">{formatTime(track.duration)}</span>
        <button
          className="remove-button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(index);
          }}
          aria-label="Eliminar canción"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PlaylistItem;
