import React from "react";

function Card(props) {
    return(
        <button onClick={() => {if(props.url!=null){window.open(props.url, "_blank")}}} className="text-left transition-1 duration-700 hover:scale-105 p-2 border-l-[0.25px] border-white">
            <h1 className="font-body text-sm md:text-base lg:text-lg text-white">{props.name + " "}<span className="italic font-thin text-[10px] md:text-[12px] lg:text-[14px]">{props.tools}</span></h1>
            <h1 className="font-body text-xs md:text-sm lg:text-base text-white font-thin">
                {props.description}
            </h1>
        </button>
    );
}

export default Card;