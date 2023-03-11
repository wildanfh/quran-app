import React from "react";
import QuranAyatItem from "./QuranAyatItem";

function QuranAyatList({ verses, ayats }) {
  return (
    <div className={`quran-ayat-list`}>
      {ayats.map((ayat) => (
        <QuranAyatItem key={ayat.nomorAyat} nomor={verses.nomor} {...ayat} />
      ))}
    </div>
  );
}

export default QuranAyatList;
