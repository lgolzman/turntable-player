/**
 * Formatea segundos a formato MM:SS
 * @param {number} seconds - Tiempo en segundos
 * @returns {string} Tiempo formateado
 */
export const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds === Infinity) {
    return '0:00';
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
