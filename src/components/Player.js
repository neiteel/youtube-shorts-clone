'use client';
import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import { Slider } from '@/components/Slider';
import SideBar from '@/components/SideBar';

function Player({ id, data, playing }) {
  const { play_url, cover } = data;
  const videoRef = useRef(null);

  const [played, setPlayed] = useState(0);
  const handleProgress = (state) => {
    setPlayed(state.played);
  };
  const handleSeek = (newProgress) => {
    if (videoRef.current) {
      videoRef.current.seekTo(newProgress);
      setPlayed(newProgress);
    }
  };

  return (
    <div className="player relative h-full w-full opacity-0">
      <ReactPlayer
        className="relative -z-10 h-full w-full"
        id={id}
        ref={videoRef}
        controls={false}
        url={play_url}
        width="100%"
        height="100%"
        muted={true}
        playsinline={true}
        loop={true}
        onProgress={handleProgress}
        playing={playing}
        onPause={() => {
          playing !== id && handleSeek(0);
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Slider
          min={0}
          max={1}
          value={[played]}
          step={0.01}
          onValueChange={(e) => {
            handleSeek(parseFloat(e));
          }}
        />
      </div>

      <SideBar />
    </div>
  );
}
export default Player;
