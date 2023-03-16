import React from "react";
import { useSearchParams } from "react-router-dom";
import chapters from "../../utils/chapters";
import QuranAppFooter from "../Universal/QuranAppFooter";
import QuranSurahBody from "./QuranSurahBody";
import QuranSurahHeader from "./QuranSurahHeader";

function QuranSurahAppWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <QuranSurahApp
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class QuranSurahApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapters: chapters,
      keyword: props.defaultKeyword || "",
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const chapters = this.state.chapters.filter((chapter) =>
      chapter.namaLatin.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <>
        <QuranSurahHeader
          onSearch={this.onSearchHandler}
          keyword={this.state.keyword}
        />
        <QuranSurahBody chapters={chapters} />
        <QuranAppFooter />
      </>
    );
  }
}

export default QuranSurahAppWrapper;
