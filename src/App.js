import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./pages/AboutUS/AboutUs";
import Genarator from "./pages/Genarator/Genarator";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Steps from "./pages/Step/Steps";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="homeSection">
        <Home />
      </div>
      <div id="stepsSection">
        <Steps />
      </div>
      <div>
        <Profile />
      </div>
      <div id="generatorSection">
        <Genarator />
      </div>
      <div id="aboutUsSection">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
