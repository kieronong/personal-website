import React, { Component } from 'react'
import profile from "./../images/Profile.jpg"

export default class About extends Component {
    render() {
        return (
            <div id="about">
            <h1 id="intro-greeting">Hey, I'm Kieron!</h1>
                <div id="intro">
                <img src={profile} alt="Profile Pic" id="profile-pic"/>
                <p id="intro-text">I'm a passionate photographer and software 
                developer, currently based out of the San Francisco Bay Area. 
                I love exploring the world looking for unique scenes and 
                interesting stories to capture. I aim to create images 
                that inspire and convey the mood and uniqueness of the 
                locations I explore. 
                <br/><br/>
                I'm always looking for the next fascinating 
                idea that compels me to build cool stuff. I love exploring
                ways to change and shape people's lives for better through
                technology and storytelling, and to explore the intersection of 
                digital media and software engineering. Hit me up to discuss ideas 
                or stories you would like to tell!
                </p>
                </div>
            </div>
        )
    }
}
