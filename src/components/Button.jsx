import React from "react";

function Button(props) {
    return <button className="transition-1 duration-700 hover:scale-110 font-display xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-white" onClick={() => props.f(props.num)}>{props.name}</button>
}

export default Button;
