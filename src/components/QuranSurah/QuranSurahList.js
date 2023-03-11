import React from "react";
import QuranSurahItem from "./QuranSurahItem";

function QuranSurahList({ chapters }) {
  return (
    <div className={`quran-surah-list`}>
      {chapters.map((chapter) => (
        <QuranSurahItem key={chapter.nomor} id={chapter.nomor} {...chapter} />
      ))}
    </div>
  );
}

export default QuranSurahList;