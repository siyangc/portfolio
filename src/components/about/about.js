import React, { Component } from 'react'
import './about.css'
import AboutLeft from './aboutLeft'
import AboutRight from './aboutRight'

export default class about extends Component {
    render() {
        return (
            <div id="about" className="about">
                <AboutLeft />
                <div className="break"></div>
                <AboutRight />
            </div>
        )
    }
}
