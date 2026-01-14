import React from 'react';
import { useAudio } from '../../context/AudioContext';
import TurntableBase from './TurntableBase';
import VinylRecord from './VinylRecord';
import Tonearm from './Tonearm';
import './Turntable.css';

const Turntable = () => {
  const { isPlaying, currentTrack, currentTime, duration } = useAudio();

  // Calcular progreso para la posición de la aguja (0 a 1)
  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="turntable-container">
      <div className="turntable">
        <TurntableBase />
        <div className="vinyl-container">
          <VinylRecord isPlaying={isPlaying} currentTrack={currentTrack} />
        </div>
        <Tonearm isPlaying={isPlaying} progress={progress} />
      </div>
    </div>
  );
};

export default Turntable;
