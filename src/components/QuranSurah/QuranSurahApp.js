import React from "react";
import QuranSurahBody from "./QuranSurahBody";
import QuranSurahHeader from "./QuranSurahHeader";

function QuranSurahApp({ onSearch, chapters }) {
  return (
    <>
      <QuranSurahHeader onSearch={onSearch} />
      <QuranSurahBody chapters={chapters} />
    </>
  );
}

export default QuranSurahApp;
