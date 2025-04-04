import React from "react";
import photo1 from "./images/photo1.webp";
import photo2 from "./images/photo2.webp";

function Photos() {
    return(
        <div className="animate-in fade-in slide-in-from-left-24 duration-1500 flex gap-3 sm:gap-5 md:gap-5 lg:gap-6 object-cover justify-evenly">
            <div className="xxs:w-48 sm:w-52 sm:h-72 md:w-52 md:h-80 lg:w-72 lg:h-96"><img src={photo2} alt="Me looking out into the sea on a cruise." className="transition-1 duration-700 hover:scale-105 grayscale w-full h-full object-cover"></img></div>
            <div className="xxs:w-48 sm:w-52 sm:h-72 md:w-52 md:h-80 lg:w-72 lg:h-96"><img src={photo1} alt="Me looking at the CN Tower." className="transition-1 duration-700 hover:scale-105 grayscale w-full h-full object-cover"></img></div>
        </div>);
}

export default Photos;
