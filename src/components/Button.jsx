import React from "react";

function Button(props) {
    return <button className="transition-1 duration-700 hover:scale-110 font-display text-xs sm:text-xs md:text-sm lg:text-base text-white" onClick={() => props.f(props.num)}>{props.name}</button>
}

export default Button;