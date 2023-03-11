import React from "react";
import { Route, Routes } from "react-router-dom";
import QuranSurahApp from './QuranSurah/QuranSurahApp';
import QuranAyatApp from './QuranAyat/QuranAyatApp';
import chapters from "../utils/chapters";
import { verses } from '../utils/verses';

class QuranApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapters: chapters,
      verses: verses,
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== '') {
      this.setState({
        chapters: this.state.chapters.filter((chapter) =>
        chapter.namaLatin.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        chapters: chapters,
      });
    }
  }

  render() {
    return (
      <Routes>
        <Route path='/' element={<QuranSurahApp chapters={this.state.chapters} onSearch={this.onSearchHandler} />} />
        <Route path='/surah/:nomor' element={<QuranAyatApp verses={this.state.verses} ayats={this.state.verses.ayat} />} />
      </Routes> 
    );
  }
}

export default QuranApp;
