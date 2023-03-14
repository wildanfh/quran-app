import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaHandPointUp } from "react-icons/fa";
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
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoaded && !prevState.isLoaded) {
      toast(
        "Klik ayat untuk memutar audio per-ayat",
        {
          icon: <FaHandPointUp />,
        }
      );
    }
  }

  render() {
    return (
      <>
        <div>
          <Toaster />
          <QuranAppHeader />
          <div className="quran-ayat__container">
            <QuranAyatHeader {...this.state.verses} />
            <QuranAyatBody
              verses={this.state.verses}
              ayats={this.state.verses.ayat}
            />
          </div>
          <QuranAppFooter />
        </div>
      </>
    );
  }
}

export default QuranAyatAppWrapper;
