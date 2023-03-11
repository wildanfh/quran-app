import React from "react";
import QuranAyatList from "./QuranAyatList";

function QuranAyatBody({ verses, ayats }) {
  return (
    <div className="quran-ayat__body">
      <QuranAyatList verses={verses} ayats={ayats} />
    </div>
  );
}

export default QuranAyatBody;
