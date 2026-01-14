import React, { useRef } from 'react';
import { useAudio } from '../../context/AudioContext';
import { formatTime } from '../../utils/formatTime';

const ProgressBar = () => {
  const { currentTime, duration, seekTo } = useAudio();
  const progressBarRef = useRef(null);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;

    seekTo(newTime);
  };

  const handleProgressDrag = (e) => {
    if (e.buttons !== 1) return; // Solo si el botón izquierdo está presionado
    handleProgressClick(e);
  };

  return (
    <div className="progress-bar-container">
      <span className="time-display">{formatTime(currentTime)}</span>
      <div
        className="progress-bar"
        ref={progressBarRef}
        onClick={handleProgressClick}
        onMouseMove={handleProgressDrag}
      >
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="progress-thumb"></div>
        </div>
      </div>
      <span className="time-display">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
