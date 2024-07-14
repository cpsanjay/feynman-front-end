import ContactUsStrip from "./components/ContactUsStrip";
import Aim from "./components/ContactUsStrip/Aim";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HorizontalRoller from "./components/HorizontalRoller";
import InfoCards from "./components/InfoCards";
import Main from "./components/Main";
import TrainingOffered from "./components/TrainingOffered";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <div className="mt-[5.5rem]">
        <ContactUsStrip />
        <Main />
        <HorizontalRoller />
        <Aim />
        <HorizontalRoller />
        <InfoCards />
        <HorizontalRoller />
        <TrainingOffered />
        <Footer />
      </div>
    </div>
  );
}

export default App;
