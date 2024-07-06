import ContactUsStrip from "./components/ContactUsStrip";
import Aim from "./components/ContactUsStrip/Aim";
import Header from "./components/Header";
import HorizontalRoller from "./components/HorizontalRoller";
import InfoCards from "./components/InfoCards";
import Main from "./components/Main";
import TrainingOffered from "./components/TrainingOffered";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-10">
        <ContactUsStrip />
        <Main />
        <HorizontalRoller />
        <InfoCards />
        <HorizontalRoller />
        <Aim />
        <HorizontalRoller />
        <TrainingOffered />
      </div>
    </div>
  );
}

export default App;
