import React from "react";
import { Route, Routes } from "react-router-dom";
import QuranSurahApp from "./QuranSurah/QuranSurahApp";
import QuranAyatAppWrapper from "./QuranAyat/QuranAyatApp";

function QuranApp() {
  return (
    <Routes>
      <Route path="/" element={<QuranSurahApp />} />
      <Route path="/surah/:nomor" element={<QuranAyatAppWrapper />} />
    </Routes>
  );
}

export default QuranApp;
