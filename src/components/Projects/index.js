import React from 'react';
import petSittingImg from '../../images/pet-sitting.png';
import pokemonDatabaseImg from '../../images/pokemon-database.PNG';
import readmeGeneratorImg from '../../images/readme-generator.PNG';
import codeQuizImg from '../../images/code-quiz.png';
import petShopImg from '../../images/pet-shop.png';
import budgetTrackerImg from '../../images/budget-tracker.png';
import Project from '../Project';

function Projects()
{
    const projects = [
        {
            name: "petStore",
            title: "Pet Store - Full Stack",
            img: petShopImg,
            description: "A website to buy pet food and accessories.",
            live: "https://codefellas-pet-shop.herokuapp.com/",
            gitHub: "https://github.com/bobswiftfoot/pet-shop"
        },
        {
            name: "petSitting",
            title: "Pet Sitting - Full Stack",
            img: petSittingImg,
            description: "A website to request and volunteer to sit and walk pets",
            live: "https://rockstars-pet-sitting.herokuapp.com/",
            gitHub: "https://github.com/bobswiftfoot/pet-sitting"
        },
        {
            name: "pokemonDatabase",
            title: "Pokemon Database - HTML/CSS/Javascript",
            img: pokemonDatabaseImg,
            description: "Pokemon Database is a place to get all your pokemon information.",
            live: "https://bobswiftfoot.github.io/bootcamp-project-1/",
            gitHub: "https://github.com/bobswiftfoot/bootcamp-project-1/"
        },
        {
            name: "readmeGenerator",
            title: "Readme Generator - Node.js",
            img: readmeGeneratorImg,
            description: "A Node.js app to generate a readme for your projects.",
            live: "https://github.com/bobswiftfoot/readme-generator/",
            gitHub: "https://github.com/bobswiftfoot/readme-generator/"
        },
        {
            name: "codeQuiz",
            title: "Code Quiz - HTML/CSS/Javascript",
            img: codeQuizImg,
            description: "A quiz app to test your coding knowledge.",
            live: "https://bobswiftfoot.github.io/code-quiz/",
            gitHub: "https://github.com/bobswiftfoot/code-quiz/"
        },
        {
            name: "budgetTracker",
            title: "Budget Tracker - IndexedDB/Node",
            img: budgetTrackerImg,
            description: "An app to track your budget",
            live: "https://bobswiftfoot-budget-tracker.herokuapp.com/",
            gitHub: "https://github.com/bobswiftfoot/budget-tracker"
        }];

    return (
        <section key="Projects" className="work row p-3" id="projects">
            <div className="project-wrapper col">
                <div className="row gx-0">
                    {projects.map((value, index) => (
                        <Project  key={value.name} value={value}/>
                    ))}
                </div>
            </div>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        </section >
    );
}

export default Projects;
