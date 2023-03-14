import React from "react";
import { useParams } from "react-router-dom";
import { getVerses } from "../../utils/verses";
import QuranAppFooter from "../Universal/QuranAppFooter";
import QuranAppHeader from "../Universal/QuranAppHeader";
import QuranAyatBody from "./QuranAyatBody";
import QuranAyatHeader from "./QuranAyatHeader";

function QuranAyatAppWrapper() {
  const { nomor } = useParams();
  return <QuranAyatApp nomor={Number(nomor)} />;
}

class QuranAyatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verses: getVerses(props.nomor),
    };
  }

  render() {
    console.log(this.state.verses);
    return (
      <>
        <QuranAppHeader />
        <div className="quran-ayat__container">
          <QuranAyatHeader {...this.state.verses} />
          <QuranAyatBody
            verses={this.state.verses}
            ayats={this.state.verses.ayat}
          />
        </div>
        <QuranAppFooter />
      </>
    );
  }
}

export default QuranAyatAppWrapper;
