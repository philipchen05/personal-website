import React from "react";

function Title() {
    return(
        <div className="animate-in fade-in slide-in-from-left duration-3400 pt-36">
            <button onClick={() => window.open("https://philipchen.ca/", "_self")}>
                <h1 className="font-display text-white font-extralight text-7xl md:text-8xl lg:text-9xl">Philip<br />Chen</h1>
            <button/>
        </div>
    );
}

export default Title;
