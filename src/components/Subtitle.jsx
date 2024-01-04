import React from "react";

function Subtitle(props) {
    if(props.fixed) {
        return(
            <div data-aos="fade-right" data-aos-duration="2000" className="pr-20 pt-5 md:pt-40 lg:pt-40">
                <h1 className="md:fixed lg:fixed text-xs sm:text-xs md:text-sm lg:text-base font-body font-light text-white tracking-widest">COMPUTER SCIENCE @UWATERLOO</h1>
            </div>
        );
    } else {
        return(
            <div data-aos="fade-right" data-aos-duration="2000" className="pr-20 pt-5 md:pt-40 lg:pt-40">
                <h1 className="text-xs sm:text-xs md:text-sm lg:text-base font-body font-light text-white tracking-widest">COMPUTER SCIENCE @UWATERLOO</h1>
            </div>
        );
    }
}

export default Subtitle;