import React from "react";

function QuranAyatHeader({namaLatin, nama, tempatTurun, arti, jumlahAyat}) {
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
          <audio src="https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"></audio>
          <button className="quran-ayat__headerButton">
            ▶️ Audio
          </button>
          <a href="/tafsir/1">
            <button className="quran-ayat__headerButton">
              📃Tafsir
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default QuranAyatHeader;