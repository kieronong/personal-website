import React, { Component } from 'react'
import landscapecover from "./../images/LandscapeCover.jpg"
import streetcover from "./../images/StreetCover.jpg"
import urbancover from "./../images/UrbanCover.jpg"
import update from 'react-addons-update'
import MyGallery from './MyGallery.js'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          galleryview: 0,
          isMouseInsideGallery: [false, false, false]
        }
    }

    changeview(i) {
        this.mouseLeave(i)
        this.setState({ galleryview: i })
    }

    mouseEnter(i) {
        this.setState(update(this.state, {
            isMouseInsideGallery: {
                [i]: {
                    $set: true
                }
            }
        }));
    }

    mouseLeave(i) {
        this.setState(update(this.state, {
            isMouseInsideGallery: {
                [i]: {
                    $set: false
                }
            }
        }));
    }

    CreateGalleryLabel(str, i) {
        if (! this.state.isMouseInsideGallery[i]) {
            return
        } 
        return (
            <div>
                <div className="gallery-label">{str}</div>
                <div className="gallery-blur"></div>
            </div>
        )
    }

    render() {
        let return_element;

        if (this.state.galleryview === 0) {
            return_element = 
            <div id="gallery">
                <h2 id="gallery-heading">GALLERY</h2>
                <div id="gallery-div">
                    <div class="gallery-image-container"
                    onMouseEnter={() => this.mouseEnter(0)}
                    onMouseLeave={() => this.mouseLeave(0)}
                    onClick={() => this.changeview(1)}>
                        {this.CreateGalleryLabel("Street", 0)}
                        <img src={streetcover} alt="Street Cover" 
                            className="gallery-photo"/>
                    </div>
                    <div class="gallery-image-container"
                    onMouseEnter={() => this.mouseEnter(1)}
                    onMouseLeave={() => this.mouseLeave(1)}
                    onClick={() => this.changeview(2)}>
                        {this.CreateGalleryLabel("Landscapes", 1)}
                        <img src={landscapecover} alt="Landscape Cover" 
                            className="gallery-photo"/>
                    </div>
                    <div class="gallery-image-container"
                    onMouseEnter={() => this.mouseEnter(2)}
                    onMouseLeave={() => this.mouseLeave(2)}
                    onClick={() => this.changeview(3)}>
                        {this.CreateGalleryLabel("Urban", 2)}
                        <img src={urbancover} alt="Urban Cover" 
                            className="gallery-photo"/>
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
