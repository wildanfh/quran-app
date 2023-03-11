import React, { useState, useRef, useEffect } from "react";

function QuranAyatItem({
  nomor,
  nomorAyat,
  audio,
  teksArab,
  teksIndonesia,
  teksLatin
}) {

  const [isPlaying, setIsPlaying, color] = useState(false);
  const audioRef = useRef(null);

  const onPlayAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    function handleAudioEnd() {
      setIsPlaying(false);
    }
    audioRef.current.addEventListener('ended', handleAudioEnd);
    return () => {
      if(audioRef.current) {
        // eslint-disable-next-line
        audioRef.current.removeEventListener('ended', handleAudioEnd);
      }
      return false;
    };
  }, [audioRef, setIsPlaying]);

  return (
    <div className="quran-ayat__itemWrapper" id={nomorAyat}>
      <div className="quran-ayat__itemContainer">
        <p className="quran-ayat__noAyat">
          {" "}
          {nomor} : {nomorAyat}{" "}
        </p>
        <p className="quran-ayat__arabicContainer">
          <audio ref={audioRef} src={audio["05"]}></audio>
          <button className={`quran-ayat__button`} dir="rtl" onClick={onPlayAudio}>
            <h1 className={`quran-ayat__arabic ${isPlaying ? 'playing' : ''}`} style={color}>{teksArab}</h1>
          </button>
        </p>
        <p className="quran-ayat__latin">
          {teksLatin}
        </p>
        <p className="quran-ayat__arti">
          {teksIndonesia}
        </p>
          <div className="quran-ayat__border"></div>
      </div>
    </div>
  );
}

export default QuranAyatItem;
