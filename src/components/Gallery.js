import React, { Component } from 'react'
import landscapecover from "./../images/LandscapeCover.jpg"
import streetcover from "./../images/StreetCover.jpg"
import urbancover from "./../images/UrbanCover.jpg"
import MyGallery from './MyGallery.js'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          galleryview: 0,
        }
    }

    changeview(i) {
        this.setState({ galleryview: i })
    }

    render() {
        let return_element;

        if (this.state.galleryview === 0) {
            return_element = 
            <div id="gallery">
                <h2 id="gallery-heading">GALLERY</h2>
                <div id="gallery-div">
                    <div class="gallery-image-container"
                    onClick={() => this.changeview(1)}>
                        <img src={streetcover} alt="Street Cover" 
                            className="gallery-photo"/>
                        <div className="gallery-label">Street</div>
                    </div>
                    <div class="gallery-image-container"
                    onClick={() => this.changeview(2)}>
                        <img src={landscapecover} alt="Landscape Cover" 
                            className="gallery-photo"/>
                        <div className="gallery-label">Landscape</div>
                    </div>
                    <div class="gallery-image-container"
                    onClick={() => this.changeview(3)}>
                        <img src={urbancover} alt="Urban Cover" 
                            className="gallery-photo"/>
                        <div className="gallery-label">Urban</div>
                    </div>
                </div>
            </div>
        }

        if (this.state.galleryview > 0) {
            return_element = 
            <div id="gallery">
                <h2 id="gallery-heading">GALLERY</h2>
                <button id="exitbutton" onClick={() => this.changeview(0)}>X</button>
                <div id="viewgallery">
                    <MyGallery
                    view={this.state.galleryview}
                    />
                </div>
            </div>
        }

        return (
            return_element
        )
    }
}
