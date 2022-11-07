import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services";
import Header from "./components/Header";

function App(){
    return(
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
            </Routes>

        </div>
    )
}

export default App;