import React from 'react';
import './Tonearm.css';

const Tonearm = ({ isPlaying, progress = 0 }) => {
  // Calcular rotación basada en progreso (0-25 grados durante reproducción)
  const playingRotation = isPlaying ? progress * 25 : 0;
  const restingRotation = 30;

  const rotation = isPlaying ? playingRotation : restingRotation;
  const lift = isPlaying ? 0 : -8;

  return (
    <div
      className={`tonearm ${isPlaying ? 'playing' : 'resting'}`}
      style={{
        transform: `rotate(${rotation}deg) translateY(${lift}px)`
      }}
    >
      <div className="tonearm-base"></div>
      <div className="tonearm-arm">
        <div className="tonearm-headshell">
          <div className="tonearm-needle"></div>
        </div>
      </div>
    </div>
  );
};

export default Tonearm;
