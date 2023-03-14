import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuranAppFooter from "../Universal/QuranAppFooter";
import QuranAppHeader from "../Universal/QuranAppHeader";
import QuranTafsirBody from "./QuranTafsirBody";
import QuranTafsirHeader from "./QuranTafsirHeader";

function QuranTafsirApp() {
  const { nomor } = useParams();
  const [surah, setSurah] = useState(null);

  const getSurahTafsirs = async (nomor) => {
    try {
      const response = await fetch(`https://equran.id/api/v2/tafsir/${nomor}`);
      const data = await response.json();
      return setSurah(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSurahTafsirs(nomor);
  }, [nomor]);

  return (
    <>
      <QuranAppHeader />
      <div className="quran-ayat__container">
        {surah && <QuranTafsirHeader {...surah} />}
        {surah && <QuranTafsirBody surah={surah} />}
      </div>
      <QuranAppFooter />
    </>
  );
}

export default QuranTafsirApp;
