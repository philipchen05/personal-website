import React from "react";
import Subtitle from "./Subtitle";
import Content from "./Content";
import { useMediaQuery } from "react-responsive";

function Bottom() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    var className = "";
    var isLandscape = true;
    
    if(isPortrait || isTabletOrMobile) {
        className = "flex flex-col";
        isLandscape = false;
    } else {
        className = "md:pt-2 lg:pt-2 grid grid-cols-2";
    }
    
    return(
        <div className={className}>
            <Subtitle isLandscape={isLandscape} />
            <Content />
        </div>
    );
}

export default Bottom;
