import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";

function Content() {
    const [state, setState] = useState(0);

    function changeState(newState) {
        setState(newState);
    }

    function renderBody(state) {
        switch(state) {
            case 0:
                return <Home />
            case 1:
                return <About />
            case 2:
                return <Projects />
            default:
                return <Contact />
        }
    }

    return(
        <div className="animate-in fade-in duration-4000 pt-6 md:pt-8 lg:pt-10 flex-col">
            <Navbar func={changeState} />
            {renderBody(state)}
        </div>
    )
    
}

export default Content;
