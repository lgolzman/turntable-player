import React from 'react';
import './VinylRecord.css';

const VinylRecord = ({ isPlaying, currentTrack }) => {
  return (
    <div className={`vinyl-record ${isPlaying ? 'playing' : 'paused'}`}>
      <div className="vinyl-grooves"></div>
      <div className="vinyl-label">
        <div className="label-content">
          {currentTrack ? (
            <>
              <div className="label-title">{currentTrack.title}</div>
              <div className="label-subtitle">33⅓ RPM</div>
            </>
          ) : (
            <div className="label-subtitle">Selecciona una canción</div>
          )}
        </div>
      </div>
      <div className="center-hole"></div>
    </div>
  );
};

export default VinylRecord;
