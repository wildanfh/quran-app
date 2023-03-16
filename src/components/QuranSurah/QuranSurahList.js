import React from "react";
import QuranSurahItem from "./QuranSurahItem";

function QuranSurahList({ chapters }) {
  return (
    <div className={`quran-surah-list`}>
      {chapters.length !== 0 ?
      chapters.map((chapter) => (
        <QuranSurahItem key={chapter.nomor} id={chapter.nomor} {...chapter} />
      )) :
      (<p className="quran-surah-message">Surah tidak ada</p>)}
    </div>
  );
}

export default QuranSurahList;