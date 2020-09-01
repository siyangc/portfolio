import React, { Component } from 'react'
import './intro.css'
export default class intro extends Component {
    render() {
        return (
            <div id="intro">
                <h1>A little bit about me</h1>
                <p className="context">
                    I'm Siyang Cheng (Tom), and I'm a recent IT graduate from 
                    University of Melbourne. My research field is about web development,
                    machine learning and big data. 
                </p>
            </div>
        )
    }
}
