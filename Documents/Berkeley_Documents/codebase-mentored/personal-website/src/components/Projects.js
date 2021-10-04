import React, { Component } from 'react'
import codebase from "./../images/Codebase.jpg"
import advisory from "./../images/Advisory.jpg"
import sana from "./../images/SANA.jpg"

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h2 id="projects-heading">PROJECTS</h2>
                <div id="projects-div">
                    <div className="projects-container">
                        <img className="projects-img" src={codebase} alt="CodeBase"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">CODEBASE</h3>
                            <p>Did bla bla bla bla</p>
                        </div>
                    </div>
                    <div className="projects-container">
                        <img className="projects-img" src={advisory} alt="Advisory"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">ADVISORY</h3>
                            <p>Did bla bla bla bla</p>
                        </div>
                    </div>
                    <div className="projects-container">
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
