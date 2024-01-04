import React from "react";

function Subtitle(props) {
    var divClass;
    var h1Class;

    if(props.fixed) {
        divClass = "pr-20 pt-40";
        h1Class = "md:fixed lg:fixed text-base md:text-lg lg:text-xl font-body text-white tracking-widest";
    } else {
        divClass = "pt-5";
        h1Class = "ext-base md:text-lg lg:text-xl font-body text-white tracking-widest"}
    return(
        <div data-aos="fade-right" data-aos-duration="2000" className={divClass}>
            <h1 className={h1Class}>COMPUTER SCIENCE @UWATERLOO</h1>
        </div>
    );
}

export default Subtitle;