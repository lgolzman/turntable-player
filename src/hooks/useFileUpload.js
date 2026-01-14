import { useState } from 'react';
import { extractAudioMetadata, generateTrackId } from '../utils/audioUtils';

export const useFileUpload = (onTracksProcessed) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const processFiles = async (files) => {
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    setError(null);

    const processedTracks = [];

    try {
      for (const file of files) {
        // Verificar que sea un archivo de audio
        if (!file.type.startsWith('audio/')) {
          console.warn(`Archivo ${file.name} no es un archivo de audio válido`);
          continue;
        }

        try {
          // Crear Object URL
          const objectUrl = URL.createObjectURL(file);

          // Extraer metadata
          const metadata = await extractAudioMetadata(file);

          // Construir objeto de canción
          const track = {
            id: generateTrackId(),
            title: file.name.replace(/\.[^/.]+$/, ''), // Remover extensión
            url: objectUrl,
            duration: metadata.duration,
            file: file,
          };

          processedTracks.push(track);
        } catch (err) {
          console.error(`Error procesando ${file.name}:`, err);
        }
      }

      if (processedTracks.length > 0 && onTracksProcessed) {
        onTracksProcessed(processedTracks);
      } else if (processedTracks.length === 0) {
        setError('No se pudieron procesar archivos de audio válidos');
      }
    } catch (err) {
      setError('Error al procesar los archivos');
      console.error('Error en processFiles:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processFiles,
    isProcessing,
    error,
  };
};
