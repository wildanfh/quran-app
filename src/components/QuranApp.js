import React from "react";
import { Route, Routes } from "react-router-dom";
import QuranAyatAppWrapper from "./QuranAyat/QuranAyatApp";
import QuranTafsirApp from "./QuranTafsir/QuranTafsirApp";
import QuranSurahAppWrapper from "./QuranSurah/QuranSurahApp";

function QuranApp() {
  return (
    <Routes>
      <Route path="/" element={<QuranSurahAppWrapper />} />
      <Route path="/surah/:nomor" element={<QuranAyatAppWrapper />} />
      <Route path="/tafsir/:nomor" element={<QuranTafsirApp />} />
    </Routes>
  );
}

export default QuranApp;
