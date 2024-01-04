import React from "react";
import Subtitle from "./Subtitle";
import Content from "./Content";

function Bottom() {
    return(
        <div className="md:pt-2 lg:pt-2 sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <Subtitle />
            <Content />
        </div>
    );
}

export default Bottom;