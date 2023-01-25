import "./App.css"
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";

function App() {
    return(
        <div className="App">
            <div className="Content">
            <Header />
            <Router />
            </div>
            <Footer />
        </div>
    )
}

export default App;