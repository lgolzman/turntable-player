import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio debe usarse dentro de AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio());

  // Sincronizar volumen con el elemento de audio
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Event listeners del audio
  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [playlist.length, currentTrackIndex]);

  // Agregar canciones a la playlist
  const addTracksToPlaylist = (tracks) => {
    setPlaylist((prev) => {
      const newPlaylist = [...prev, ...tracks];
      // Si es la primera canción, cargarla automáticamente
      if (prev.length === 0 && tracks.length > 0) {
        loadTrack(0, newPlaylist);
      }
      return newPlaylist;
    });
  };

  // Eliminar una canción de la playlist
  const removeTrack = (index) => {
    const trackToRemove = playlist[index];

    // Revocar el Object URL para liberar memoria
    if (trackToRemove.url) {
      URL.revokeObjectURL(trackToRemove.url);
    }

    setPlaylist((prev) => {
      const newPlaylist = prev.filter((_, i) => i !== index);

      // Ajustar el índice actual si es necesario
      if (index === currentTrackIndex) {
        if (newPlaylist.length === 0) {
          audioRef.current.pause();
          audioRef.current.src = '';
          setIsPlaying(false);
          setCurrentTime(0);
          setDuration(0);
        } else {
          const newIndex = index >= newPlaylist.length ? 0 : index;
          setCurrentTrackIndex(newIndex);
          loadTrack(newIndex, newPlaylist);
        }
      } else if (index < currentTrackIndex) {
        setCurrentTrackIndex((prev) => prev - 1);
      }

      return newPlaylist;
    });
  };

  // Cargar una canción específica
  const loadTrack = (index, playlistToUse = playlist) => {
    if (index < 0 || index >= playlistToUse.length) return;

    const track = playlistToUse[index];
    audioRef.current.src = track.url;
    audioRef.current.load();
    setCurrentTrackIndex(index);
    setCurrentTime(0);
  };

  // Reproducir una canción específica
  const playTrack = (index) => {
    if (index === currentTrackIndex) {
      togglePlay();
    } else {
      loadTrack(index);
      setTimeout(() => {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Error al reproducir:', err));
      }, 100);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (playlist.length === 0) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Error al reproducir:', err));
    }
  };

  // Siguiente canción
  const nextTrack = () => {
    if (playlist.length === 0) return;

    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(nextIndex);

    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Error al reproducir:', err));
      }, 100);
    }
  };

  // Canción anterior
  const previousTrack = () => {
    if (playlist.length === 0) return;

    const prevIndex = currentTrackIndex - 1 < 0 ? playlist.length - 1 : currentTrackIndex - 1;
    loadTrack(prevIndex);

    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Error al reproducir:', err));
      }, 100);
    }
  };

  // Saltar a una posición específica
  const seekTo = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Ajustar volumen
  const setVolumeLevel = (level) => {
    const normalizedLevel = Math.max(0, Math.min(1, level));
    setVolume(normalizedLevel);
  };

  const value = {
    playlist,
    currentTrack: playlist[currentTrackIndex] || null,
    currentTrackIndex,
    isPlaying,
    volume,
    currentTime,
    duration,
    addTracksToPlaylist,
    removeTrack,
    playTrack,
    togglePlay,
    nextTrack,
    previousTrack,
    seekTo,
    setVolumeLevel,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};
