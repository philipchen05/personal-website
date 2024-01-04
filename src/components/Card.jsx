import React from "react";

function Card(props) {
    return(
        <button onClick={() => {if(props.url!=null){window.open(props.url, "_blank")}}} className="text-left transition-1 duration-700 hover:scale-105 p-2 border-l-[0.25px] border-white">
            <h1 className="font-body text-lg md:text-xl lg:text-2xl text-white">{props.name + " "}<span className="italic font-thin text-[16px] md:text-[18px] lg:text-[20px]">{props.tools}</span></h1>
            <h1 className="font-body text-lg md:text-xl lg:text-2xl text-white font-thin">
                {props.description}
            </h1>
        </button>
    );
}

export default Card;