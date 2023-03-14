import React from "react";

function QuranTafsirItem({ nomor, ayat, teks }) {
  return (
    <div className="w-full mb-2 quran-tafsir__itemContainer" id={nomor}>
      <div className="p-4 bg-slate-50 dark:bg-gray-800 border border-primary-green-light dark:border-primary-green-dark quran-tafsir__textContainer">
        <p className="mb-5 text-primary-hover-light dark:text-slate-200 quran-tafsir__textNumber">{nomor} : {ayat}</p>
        <p className="text-left text-primary-hover-light dark:text-slate-300 text-sm text-justify whitespace-pre-wrap quran-tafsir__text">
          {teks}
        </p>
        <span className="quran-tafsir__line"></span>
      </div>
    </div>
  );
}

export default QuranTafsirItem;
