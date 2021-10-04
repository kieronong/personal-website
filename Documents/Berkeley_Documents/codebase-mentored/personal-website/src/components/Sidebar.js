import React, { Component } from 'react'
import github from "./../images/GitHub.png"
import linkedin from "./../images/Linkedin.png"
import flickr from "./../images/Flickr.png"

export default class Hi extends Component {
    render() {
        return (
            <div>
                <header>
                    <div id="logo">
                        <div id="logo-fname">KIERON</div>
                        <div id="logo-lname">ONG</div>
                    </div>
                    <nav id="navbar">
                        <a href="#intro-greeting" className="nav-link">About</a>
                        <a href="#gallery" className="nav-link">Gallery</a>
                        <a href="#projects" className="nav-link">Experience</a>
                    </nav>
                    <div id="contact">
                        <a href="google.com" className="contact-link">
                        <img src={github} alt="GitHub" className="contact-logo"/></a>
                        <a href="google.com" className="contact-link">
                        <img src={linkedin} alt="LinkedIn" className="contact-logo"/></a>
                        <a href="google.com" className="contact-link">
                        <img src={flickr} alt="Flickr" className="contact-logo"/></a>
                    </div>
                </header>
            </div>
        )
    }
}

