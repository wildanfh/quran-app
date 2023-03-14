import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuranTafsirBody from "./QuranTafsirBody";
import QuranTafsirHeader from "./QuranTafsirHeader";

function QuranTafsirApp() {
  const { nomor } = useParams();
  const [surah, setSurah] = useState(null);

  const getSurahTafsirs = async (nomor) => {
    try {
      const response = await fetch(`https://equran.id/api/v2/tafsir/${nomor}`);
      const data = await response.json();
      console.log(data.data.tafsir[0].teks);
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
      {surah && <QuranTafsirHeader {...surah} /> }
      {surah && <QuranTafsirBody surah={surah} />}
    </>
  );
}

export default QuranTafsirApp;
