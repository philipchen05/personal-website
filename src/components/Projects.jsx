import React from "react";
import Card from "./Card";

function Projects() {
    return(
        <div className="animate-in fade-in-5 slide-in-from-bottom-5 duration-1000 flex flex-col gap-10">
            <Card url="https://github.com/philipchen05/ride-ti-reporter" name="RIDE-TI Reporter" tools="Python, Flask, Next.js, TypeScript, Firebase, Tailwind CSS" description="A software solution for automating the production of PROD and UAT defect reports for the Ministry of Finance." />
            <Card url="https://github.com/kevinyvv/memoir" name="MEMOIR" tools="Python, Flask, MongoDB, React, JavaScript, Tailwind CSS" description="A social media app for sharing and connecting with others through nostalgic memories (UofTHacks 11)." />
            <Card url="https://github.com/philipchen05/students-of-watan" name="Students of Watan (Settlers of Catan)" tools="C++" description="Settlers of Catan, but with a Waterloo twist. A fully-fledged turn-based strategy game built in C++ with resource trading and randomized map generation." />
            <Card url="https://github.com/philipchen05/zombie-survival" name="ZOMBIE SURVIVAL" tools="Java, Swing" description="A top-down zombie survival video game created in Java. The game features a dynamic splash screen, a main menu, a live leaderboard, and a game over screen." />
        </div>
    );
}

export default Projects;
