/**
 * Extrae metadata de un archivo de audio
 * @param {File} file - Archivo de audio
 * @returns {Promise<Object>} Metadata del archivo
 */
export const extractAudioMetadata = (file) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    const objectUrl = URL.createObjectURL(file);

    audio.addEventListener('loadedmetadata', () => {
      resolve({
        duration: audio.duration,
      });
      URL.revokeObjectURL(objectUrl);
    });

    audio.addEventListener('error', () => {
      reject(new Error('Error al cargar el archivo de audio'));
      URL.revokeObjectURL(objectUrl);
    });

    audio.src = objectUrl;
  });
};

/**
 * Genera un ID único para una canción
 * @returns {string} ID único
 */
export const generateTrackId = () => {
  return `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
