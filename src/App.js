import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./pages/AboutUS/AboutUs";
import Genarator from "./pages/Genarator/Genarator";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Steps from "./pages/Step/Steps";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <div id="homeSection">
        <Home />
      </div>
      <div id="stepsSection">
        <Steps />
      </div>
      {user && (
        <div>
          <Profile />
        </div>
      )}

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
