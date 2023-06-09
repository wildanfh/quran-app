import React from "react";

function QuranSurahHeader({ onSearch, keyword }) {
  return (
    <div className="quran-surah__header">
      <h1>Quranku</h1>
      <div className="quran-search">
        <input
          type="text"
          value={keyword}
          placeholder="Cari Surah..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default QuranSurahHeader;
