import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
} from "react-icons/fa";
import assets from "../assets";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const currentSong = assets.hits[currentSongIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  //to moves to the next song in the playlist
  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % assets.hits.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  //to go back to the previous song in the playlist
  const handlePrev = () => {
    const prevIndex =
      (currentSongIndex - 1 + assets.hits.length) % assets.hits.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  //volume control
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  //update the currect time every second
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  //sets up the total duration of the song as soon as it starts loading
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  //to click on the progress bar and jump to any part of the song
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect(); //Grabs the size and position of the progress bar on the screen.
    //rect.left: where the bar starts horizontally
    //rect.width: how wide the full bar is
    const clickX = e.clientX - rect.left; //e.clientX: where the user clicked on the screen
    const percent = clickX / rect.width; //to calculate how far the user clicked as a percentage of the full bar
    audioRef.current.currentTime = percent * duration;
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setCurrentTime(0); // reset progress bar
  }, [currentSongIndex]);

  const formatTime = (time: number) =>
    isNaN(time)
      ? "0:00"
      : `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
          2,
          "0"
        )}`;

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gray-900 h-28 px-6 py-2 flex flex-col gap-2 border-l-1 border-white/15">
      {/* Seek Bar */}
      <div className="flex items-center gap-4 mt-2 mb-2">
        <span className="text-xs w-10">{formatTime(currentTime)}</span>
        <div
          ref={progressRef}
          className="flex-1 h-2 bg-gray-700 rounded cursor-pointer relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-green-500 rounded"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs w-10 text-right">{formatTime(duration)}</span>
      </div>

      {/*controll section*/}
      <div className="flex items-center justify-between">
        {/* Song Info */}
        <div className="text-sm">
          {currentSong.title}
          <br />
          <span className="text-gray-400 text-xs">{currentSong.artist}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <FaStepBackward className="cursor-pointer" onClick={handlePrev} />
          {isPlaying ? (
            <FaPause className="cursor-pointer" onClick={togglePlay} />
          ) : (
            <FaPlay className="cursor-pointer" onClick={togglePlay} />
          )}
          <FaStepForward className="cursor-pointer" onClick={handleNext} />
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <FaVolumeUp />
          <input
            type="range"
            className="w-24"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default Player;
