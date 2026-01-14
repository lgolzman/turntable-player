import React from 'react';
import { useAudio } from '../../context/AudioContext';
import FileUpload from './FileUpload';
import PlaylistItem from './PlaylistItem';
import './Playlist.css';

const Playlist = () => {
  const { playlist, currentTrackIndex, playTrack, removeTrack } = useAudio();

  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <h2>Playlist</h2>
        <FileUpload />
      </div>

      {playlist.length === 0 ? (
        <div className="playlist-empty">
          <p>No hay canciones en la playlist</p>
          <p className="hint">Haz click en "Agregar Canciones" para comenzar</p>
        </div>
      ) : (
        <div className="playlist-items">
          {playlist.map((track, index) => (
            <PlaylistItem
              key={track.id}
              track={track}
              index={index}
              isActive={index === currentTrackIndex}
              onPlay={playTrack}
              onRemove={removeTrack}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlist;
