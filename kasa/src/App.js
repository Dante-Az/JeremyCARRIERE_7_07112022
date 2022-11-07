import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Erreur from "./pages/Erreur/Erreur"
import Logement from "./pages/Logement/Logement";
import Header from "./components/Header";

function App(){
    return(
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </div>
    )
}

export default App;