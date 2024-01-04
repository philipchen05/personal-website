import React from "react";
import Button from "./Button";
import resume from "./Resume.pdf";

function Navbar(props) {    
    return(
        <div className="mb-6 md:mb-8 lg:mb-10 flex flex-row text-white justify-evenly">
            <Button name="About" f={props.func} num={1} />
            <Button name="Projects" f={props.func} num={2} />
            <button className="transition-1 duration-700 hover:scale-110 font-display text-sm sm:text-sm md:text-base lg:text-lg text-white font-light" onClick={() => window.open(resume, "_blank")}>Resume</button>
            <Button name="Contact" f={props.func} num={3} />
        </div>
    );
}

export default Navbar;