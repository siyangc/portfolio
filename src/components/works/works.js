import React, { Component } from 'react'
import './works.css'
export default class works extends Component {
    render() {
        return (
            <div id="works">
                <h1>My Projects</h1>
                <div className="projects">
                    <div className="project">
                        <img src="./photos/portfolio.jpg"
                             alt=""
                             style={{width:"100%"}}
                        />
                    </div>
                    <div className="project">
                        <img src="./photos/portfolio.jpg"
                             alt=""
                             style={{width:"100%"}}
                        />
                    </div>
                    <div className="project">
                        <img src="./photos/portfolio.jpg"
                             alt=""
                             style={{width:"100%"}}
                        />
                    </div>
                </div>                
            </div>
        )
    }
}
