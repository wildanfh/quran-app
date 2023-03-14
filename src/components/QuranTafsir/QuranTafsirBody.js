import React from "react";
import QuranTafsirList from "./QuranTafsirList";

function QuranTafsirBody({ surah }) {
  return (
    <div className="quran-tafsir__body">
      {surah && <QuranTafsirList surah={surah} />}
    </div>
  );
}

export default QuranTafsirBody;
