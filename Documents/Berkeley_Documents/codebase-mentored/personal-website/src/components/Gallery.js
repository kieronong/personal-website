import React, { Component } from 'react'
import landscapecover from "./../images/LandscapeCover.jpg"

export default class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                <h2 id="gallery-heading">GALLERY</h2>
                <div id="gallery-div">
                    <img src={landscapecover} alt="Landscape Cover" className="gallery-photo"/>
                    <img src={landscapecover} alt="Landscape Cover" className="gallery-photo"/>
                    <img src={landscapecover} alt="Landscape Cover" className="gallery-photo"/>
                </div>
            </div>
        )
    }
}
