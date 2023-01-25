import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Erreur from "../../pages/Erreur/Erreur"
import Logement from "../../pages/Logement/Logement";
export default function Router() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </div>
    )
}