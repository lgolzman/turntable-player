import React from 'react';
import { AudioProvider } from '../context/AudioContext';
import Turntable from './Turntable/Turntable';
import Playlist from './Playlist/Playlist';
import PlayPauseButton from './Controls/PlayPauseButton';
import VolumeControl from './Controls/VolumeControl';
import ProgressBar from './Controls/ProgressBar';
import PlaylistControls from './Controls/PlaylistControls';
import './App.css';
import '../components/Controls/Controls.css';

function App() {
  return (
    <AudioProvider>
      <div className="app">
        <header className="app-header">
          <h1>Reproductor de Tocadiscos</h1>
        </header>

        <div className="app-content">
          <div className="left-section">
            <Turntable />
            <div className="controls-container">
              <PlaylistControls />
              <PlayPauseButton />
              <ProgressBar />
              <VolumeControl />
            </div>
          </div>

          <div className="right-section">
            <Playlist />
          </div>
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
