import React, { useEffect, useState, useRef } from "react";

export default function CategorySlider() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div>
            <div className="music-container">
                <button className="play-pause-button" onClick={togglePlayPause}>
                    <img
                        src={isPlaying ? '../volume.png' : '../mute.png'}
                        alt={isPlaying ? 'Mute' : 'Volume'}
                        className="icon"
                    />
                </button>
                <audio ref={audioRef} loop>
                    <source src="/music.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
}
