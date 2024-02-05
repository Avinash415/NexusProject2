import Companies from "./components/Companies/Companies";
import Contactus from "./components/Contactus/Contactus";
import Getstart from "./components/Getstart/Getstart";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="app">
     <Header/>
     <Hero/>
     <Companies/>
     <Residencies/>
     <Value/>
     <Contactus/>
     <Getstart/>
     <Footer/>
    </div>
  );
}

export default App;
