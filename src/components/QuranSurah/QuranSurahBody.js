import React from "react";
import QuranSurahList from "./QuranSurahList";

function QuranSurahBody({ chapters }) {
  return (
    <div className="quran-surah__body">
      <h2>Surah</h2>
      <QuranSurahList chapters={chapters}/>
    </div>
  );
}
export default QuranSurahBody;
