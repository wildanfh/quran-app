import React from "react";
import { Link } from "react-router-dom";

function QuranSurahItem({
  nomor,
  namaLatin,
  arti,
  nama,
  jumlahAyat,
}) {
  return (
    <div className={`ChapterAndJuzList_chapterContainer__`}>
      <Link to={`/surah/${nomor}`} className={`Link_base__`}>
        <div className={`SurahPreviewRow_container__`}>
          <div className={`SurahPreviewRow_left__`}>
            <div className={`SurahPreviewRow_surahNumber__`}>
              <p>{nomor}</p>
            </div>
            <div className={`SurahPreviewRow_surahNameContainer__${nomor}`}>
              <div className={`SurahPreviewRow_surahName__`}>{namaLatin}</div>
              <p className={`SurahPreviewRow_translatedSurahName__`}>
                {arti}
              </p>
            </div>
          </div>
          <div className={`SurahPreviewRow_right__`}>
            <div>
              <span className={`ChapterIconContainer_iconContainer__`} dir='rtl'>
                <span translate="no">{nama}</span>
              </span>
            </div>
            <div className={`SurahPreviewRow_description__`}>
              {jumlahAyat} Ayat
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default QuranSurahItem;
