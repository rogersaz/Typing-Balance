import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getRandomTrack } from '../utils/music';

interface GameAudioProps {
  isPlaying: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const GameAudio = ({ isPlaying, isMuted, onToggleMute }: GameAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const track = getRandomTrack();
      if (audioRef.current) {
        audioRef.current.src = track;
        audioRef.current.volume = 0.3;
        audioRef.current.load();
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={onToggleMute}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
      <audio ref={audioRef} loop />
    </div>
  );
};