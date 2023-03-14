import React from "react";
import chapters from "../../utils/chapters";
import QuranAppFooter from "../Universal/QuranAppFooter";
import QuranSurahBody from "./QuranSurahBody";
import QuranSurahHeader from "./QuranSurahHeader";

class QuranSurahApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapters: chapters,
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(text) {
    let teks = '';
    teks = text;
    if (teks.length === 0) {
      this.setState({
        chapters: chapters,
      });
    } else {
      this.setState({
        chapters: this.state.chapters.filter((chapter) =>
          chapter.namaLatin.toLowerCase().includes(teks.toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <>
        <QuranSurahHeader onSearch={this.onSearchHandler} />
        <QuranSurahBody chapters={this.state.chapters} />
        <QuranAppFooter />
      </>
    );
  }
}

export default QuranSurahApp;
