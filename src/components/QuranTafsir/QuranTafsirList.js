import React from "react";
import QuranTafsirItem from "./QuranTafsirItem";

function QuranTafsirList({ surah }) {
  return (
    <div className={`quran-tafsir-list`}>
      {surah && surah.tafsir.map((tafsir) => (
        <QuranTafsirItem key={tafsir.ayat} nomor={surah.nomor} {...tafsir} />
      ))}
    </div>
  );
}

export default QuranTafsirList;
