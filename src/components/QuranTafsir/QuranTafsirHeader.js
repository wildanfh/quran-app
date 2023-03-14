import React from "react";
import { Link } from "react-router-dom";

function QuranTafsirHeader({nomor, namaLatin, nama, tempatTurun, arti, jumlahAyat}) {

  return (
    <div className="quran-tafsir__headerWrapper">
      <div className="quran-tafsir__headerContainer">
        <h2 className="quran-tafsir__headerText">
          {namaLatin} • {nama}
        </h2>
        <p className="quran-tafsir__headerTagline">
          {tempatTurun} • {arti} • {jumlahAyat} Ayat
        </p>
        <p className="quran-tafsir__headerButtonContainer">
          <Link to={`/surah/${nomor}`}>
            <button className="quran-tafsir__headerButton">
              Surah
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default QuranTafsirHeader;