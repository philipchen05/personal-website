import React from "react";

function Card(props) {
    return(
        <button onClick={() => {if(props.url!=null){window.open(props.url, "_blank")}}} className="text-left transition-1 duration-700 hover:scale-105 p-2 border-l-[1px] border-white">
            <h1 className="font-body text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">{props.name + " "}<br></br><span className="italic font-thin text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">{props.tools}</span></h1>
            <h1 className="font-body text-lg sm:text-xl md:text-2xl lg:text-2xl text-white font-thin">
                {props.description}
            </h1>
        </button>
    );
}

export default Card;
