import React from "react";
import Card from "./Card";

function Projects() {
    return(
        <div className="animate-in fade-in-5 slide-in-from-bottom-5 duration-1000 flex flex-col gap-8">
            <Card url="https://github.com/philipchen05/zombie-survival" name="ZOMBIE SURVIVAL GAME" tools="Java, Swing" description="A top-down zombie survival video game created in Java. The game features a dynamic splash screen, a main menu, a live leaderboard, and a game over screen." />
            <Card url="https://github.com/philipchen05/mark-book" name="MARK BOOK PROGRAM" tools="Java" description="A mark book program created using Java for teachers to store, view, and update student mark information." />
            <Card name="TINDOG" tools="HTML, CSS, Bootstrap" description="A just-for-fun full-fledged user interface for TinDog, a satirical website that simulates Tinder for dogs." />
        </div>
    );
}

export default Projects;