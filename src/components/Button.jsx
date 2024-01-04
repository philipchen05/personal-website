import React from "react";

function Button(props) {
    return <button className="transition-1 duration-700 hover:scale-110 font-display text-lg md:text-xl lg:text-2xl text-white" onClick={() => props.f(props.num)}>{props.name}</button>
}

export default Button;