import React from "react";

function Subtitle(props) {
    var divClass;

    if(props.isLandscape) {
        divClass = "pr-20 pt-11 animate-in fade-in slide-in-from-left duration-2000";
    } else {
        divClass = "pt-5 animate-in fade-in slide-in-from-left duration-2000";
    }

    return(
        <div className={divClass}>
            <h1 className="text-lg md:text-xl lg:text-2xl font-body text-white tracking-widest">COMPUTER SCIENCE @UWATERLOO</h1>
        </div>
    );
}

export default Subtitle;
