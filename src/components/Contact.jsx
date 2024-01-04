import React from "react";
import linkedin from "./images/linkedin.webp";
import instagram from "./images/instagram.webp";
import github from "./images/github.png"

function Contact() {
    return(
        <div className="animate-in fade-in-5 slide-in-from-bottom-5 duration-1000">
            <div className="flex flex-row justify-evenly">
                <button><img src={linkedin} className="transition-1 duration-700 hover:scale-110 rounded-xl size-10 sm:size-12 md:size-14 lg:size-16" alt="LinkedIn Logo." onClick={() => window.open("https://www.linkedin.com/in/philip-chen-489299232/", "_blank")} /></button>
                <button><img src={instagram} className="transition-1 duration-700 hover:scale-110 size-10 sm:size-12 md:size-14 lg:size-16" alt="Instagram Logo." onClick={() => window.open("https://www.instagram.com/philip__chen/", "_blank")} /></button>
                <button><img src={github} className="transition-1 duration-700 hover:scale-110 rounded-xl size-10 sm:size-12 md:size-14 lg:size-16" alt="GitHub Logo." onClick={() => window.open("https://github.com/philipchen05", "_blank")} /></button>
            </div>
            <h1 className="leading-5 text-center font-body text-xs sm:text-xs md:text-sm lg:text-base text-white font-thin">
            <br />
            EMAIL: philipchen935@gmail.com
            <br />
            PHONE: (647) 550-1143
            </h1>
        </div>
    );
}

export default Contact;