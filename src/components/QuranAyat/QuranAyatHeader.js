import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function QuranAyatHeader({nomor, namaLatin, nama, tempatTurun, arti, jumlahAyat, audioFull}) {

  const [isPlaying, setIsPlaying] = useState(false);
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
    <div className="quran-ayat__headerWrapper">
      <div className="quran-ayat__headerContainer">
        <h2 className="quran-ayat__headerText">
          {namaLatin} • {nama}
        </h2>
        <p className="quran-ayat__headerTagline">
          {tempatTurun} • {arti} • {jumlahAyat} Ayat
        </p>
        <p className="quran-ayat__headerButtonContainer">
          <audio ref={audioRef} src={audioFull["05"]}></audio>
          <button className="quran-ayat__headerButton" onClick={onPlayAudio}>
            { isPlaying ? 'Pause' : 'Play' }
          </button>
          <Link to={`/tafsir/${nomor}`}>
            <button className="quran-ayat__headerButton">
              📃Tafsir
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default QuranAyatHeader;