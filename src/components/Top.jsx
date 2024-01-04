import React from "react";
import Title from "./Title";
import Photos from "./Photos";

function Top() {
    return(
    <div className="h-200 pb-4 border-b-2 border-white grid grid-cols-2">
        <Title />
        <Photos />
    </div>);
}

export default Top;