import Navbar from "./Navbar.js"
import Homepage from "./Home"

const App =()=>{

    return(
        <div className="app">
            <Navbar />
            <div className="content">
            <Homepage />
            </div>
        </div>
    )
}

export default App;