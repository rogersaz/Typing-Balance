const MUSIC_TRACKS = [
  'https://raw.githubusercontent.com/rogersaz/Typing-Balance/main/src/components/music/90s-Retro-Gaming.mp3',
  'https://raw.githubusercontent.com/rogersaz/Typing-Balance/main/src/components/music/Gaming-Player-One.mp3',
  'https://raw.githubusercontent.com/rogersaz/Typing-Balance/main/src/components/music/funky-song1.mp3',
  'https://raw.githubusercontent.com/rogersaz/Typing-Balance/main/src/components/music/funky.mp3'
];

let lastTrack: string | null = null;

export const getRandomTrack = () => {
  const availableTracks = MUSIC_TRACKS.filter(track => track !== lastTrack);
  const randomTrack = availableTracks[Math.floor(Math.random() * availableTracks.length)];
  lastTrack = randomTrack;
  return randomTrack;
};