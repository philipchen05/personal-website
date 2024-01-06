import React from "react";

function Card(props) {
    return(
        <button onClick={() => {if(props.url!=null){window.open(props.url, "_blank")}}} className="text-left transition-1 duration-700 hover:scale-105 p-2 border-l-[1px] border-white">
            <h1 className="font-body text-xl md:text-2xl lg:text-2xl text-white">{props.name + " "}<span className="italic font-thin text-[18px] md:text-[20px] lg:text-[20px]">{props.tools}</span></h1>
            <h1 className="font-body text-xl md:text-2xl lg:text-2xl text-white font-thin">
                {props.description}
            </h1>
        </button>
    );
}

export default Card;
