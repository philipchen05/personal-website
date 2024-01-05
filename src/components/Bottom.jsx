import React from "react";
import Subtitle from "./Subtitle";
import Content from "./Content";
import { useMediaQuery } from "react-responsive";

function Bottom() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    var className = "";
    var fixed = false;
    
    if(isPortrait || isTabletOrMobile) {
        className = "flex flex-col";
    } else {
        className = "md:pt-2 lg:pt-2 grid grid-cols-2";
        fixed = true;
    }
    
    return(
        <div className={className}>
            <Subtitle fixed={fixed} />
            <Content />
        </div>
    );
}

export default Bottom;