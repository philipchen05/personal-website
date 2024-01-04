import React from "react";

function Subtitle(props) {
    if(props.fixed) {
        return(
            <div data-aos="fade-right" data-aos-duration="2000" className="pr-20 pt-40">
                <h1 className="md:fixed lg:fixed text-base md:text-lg lg:text-xl font-body text-white tracking-widest">COMPUTER SCIENCE @UWATERLOO</h1>
            </div>
        );
    } else {
        return(
            <div data-aos="fade-right" data-aos-duration="2000" className="pt-5">
                <h1 className="text-base md:text-lg lg:text-xl font-body text-white tracking-widest">COMPUTER SCIENCE @UWATERLOO</h1>
            </div>
        );
    }
}

export default Subtitle;