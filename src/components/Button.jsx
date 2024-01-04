import React from "react";

function Button(props) {
    return <button className="transition-1 duration-700 hover:scale-110 font-display text-sm sm:text-sm md:text-base lg:text-lg text-white" onClick={() => props.f(props.num)}>{props.name}</button>
}

export default Button;