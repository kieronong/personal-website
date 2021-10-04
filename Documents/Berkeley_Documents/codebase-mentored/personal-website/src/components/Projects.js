import React, { Component } from 'react'
import codebase from "./../images/Codebase.png"
import advisory from "./../images/Advisory.png"
import sana from "./../images/SANA.png"

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h2 id="projects-heading">EXPERIENCE</h2>
                <div id="projects-div">
                    <div className="projects-container" id="pc-1">
                        <img className="projects-img" src={codebase} alt="CodeBase"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">CODEBASE</h3>
                            <p>Worked with a non-profit to develop the full-stack
                            environment for a website. Implemented front-end responsive
                            web design and back-end database processing using React and Node.js. </p>
                        </div>
                    </div>
                    <div className="projects-container" id="pc-2">
                        <img className="projects-img" src={advisory} alt="Advisory"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">ADVISORY SINGAPORE</h3>
                            <p>Did bla bla bla bla</p>
                        </div>
                    </div>
                    <div className="projects-container" id="pc-3">
                        <img className="projects-img" src={sana} alt="SANA"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">SANA</h3>
                            <p>Did bla bla bla bla</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
