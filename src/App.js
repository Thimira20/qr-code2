import NavBar from "./components/NavBar/NavBar";
import Genarator from "./pages/Genarator/Genarator";
import Home from "./pages/Home/Home";
import Steps from "./pages/Step/Steps";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Steps />
      <Genarator />
    </div>
  );
}

export default App;
