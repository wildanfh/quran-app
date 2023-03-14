import React from "react";
import { Route, Routes } from "react-router-dom";
import QuranSurahApp from "./QuranSurah/QuranSurahApp";
import QuranAyatAppWrapper from "./QuranAyat/QuranAyatApp";
import QuranTafsirApp from "./QuranTafsir/QuranTafsirApp";

function QuranApp() {
  return (
    <Routes>
      <Route path="/" element={<QuranSurahApp />} />
      <Route path="/surah/:nomor" element={<QuranAyatAppWrapper />} />
      <Route path="/tafsir/:nomor" element={<QuranTafsirApp />} />
    </Routes>
  );
}

export default QuranApp;
