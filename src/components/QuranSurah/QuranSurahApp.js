import React from "react";
import chapters from "../../utils/chapters";
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
    if (text.length !== 0 && text.trim() !== "") {
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
      <>
        <QuranSurahHeader onSearch={this.onSearchHandler} />
        <QuranSurahBody chapters={this.state.chapters} />
      </>
    );
  }
}

export default QuranSurahApp;
