import React from "react";
import Subtitle from "./Subtitle";
import Content from "./Content";
import { useMediaQuery } from "react-responsive";

function Bottom() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    if(isPortrait || isTabletOrMobile) {
        return(
            <div className="flex flex-col">
                <Subtitle fixed={false} />
                <Content />
            </div>
        );
    } else {
        return(
            <div className="md:pt-2 lg:pt-2 grid grid-cols-2">
                <Subtitle fixed={true} />
                <Content />
            </div>
        );
    }
}

export default Bottom;