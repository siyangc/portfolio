import React, { Component } from 'react'
import './navBar.css'
export default class navBar extends Component {

    scrollToAnchor = (anchorName) => {
        if (anchorName) {            
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <p onClick={() => this.scrollToAnchor('about')}>About</p>
                        </li>
                        <li>
                            <p onClick={() => this.scrollToAnchor('intro')}>Intro</p>
                        </li>
                        <li>
                            <p onClick={() => this.scrollToAnchor('skills')}>Skills</p>
                        </li>
                        <li>
                            <p onClick={() => this.scrollToAnchor('works')}>Works</p>
                        </li>
                        <li>
                            <p onClick={() => this.scrollToAnchor('hobbies')}>Hobbies</p>
                        </li>
                        <li>
                            <p onClick={() => this.scrollToAnchor('contact')}>Contact</p>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
