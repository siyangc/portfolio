import React, { Component } from 'react'
import './hobbies.css'
export default class hobbies extends Component {
    render() {
        return (
            <div id="hobbies">
                <h1>My Bobbies</h1>
                <div id="hobby">
                    <img src="./icons/camera.svg" alt="" />
                    <img src="./icons/coffee-mug.svg" alt="" />
                    <img src="./icons/gamepad.svg" alt="" />
                    <img src="./icons/karaoke.svg" alt="" />
                    <img src="./icons/music.svg" alt="" />
                </div>
                
            </div>
        )
    }
}
