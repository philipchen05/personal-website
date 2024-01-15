import React from "react";
import Card from "./Card";

function Projects() {
    return(
        <div className="animate-in fade-in-5 slide-in-from-bottom-5 duration-1000 flex flex-col gap-10">
            <Card url="https://github.com/philipchen05/zombie-survival" name="ZOMBIE SURVIVAL" tools="Java, Swing" description="A top-down zombie survival video game created in Java. The game features a dynamic splash screen, a main menu, a live leaderboard, and a game over screen." />
            <Card url="https://github.com/philipchen05/iss-tracker" name="ISS TRACKER" tools="Node.js, React, JavaScript, Axios, Tailwind CSS" description="A live International Space Station (ISS) tracker created with React that displays the location of the ISS on a world map." />
            <Card url="https://github.com/philipchen05/mark-book" name="TDSB Markbook" tools="Java" description="A mark book program created using Java for teachers to store, view, and update student mark information." />
        </div>
    );
}

export default Projects;
