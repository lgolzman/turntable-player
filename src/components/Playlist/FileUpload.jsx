import React, { useRef } from 'react';
import { useAudio } from '../../context/AudioContext';
import { useFileUpload } from '../../hooks/useFileUpload';

const FileUpload = () => {
  const { addTracksToPlaylist } = useAudio();
  const fileInputRef = useRef(null);

  const { processFiles, isProcessing, error } = useFileUpload(addTracksToPlaylist);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    processFiles(files);
    // Resetear el input para permitir seleccionar los mismos archivos de nuevo
    e.target.value = '';
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="file-upload">
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="audio-file-input"
      />
      <button
        className="upload-button"
        onClick={handleButtonClick}
        disabled={isProcessing}
      >
        {isProcessing ? 'Procesando...' : '+ Agregar Canciones'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FileUpload;
