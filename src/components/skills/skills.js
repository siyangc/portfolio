import React, { Component } from 'react'
import './skills.css'
export default class skills extends Component {

    render() {
        return (
            <div id="skills">
                <div className="charts">
                    <div className="chart chart--dev">
                    <span className="chart__title">Skills</span>
                        <ul className="chart--horiz">
                            <li className="chart__bar" style={{width: "75%"}}>
                            <span className="chart__label">
                                JAVA
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "90%"}}>
                            <span className="chart__label">
                                PYTHON
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "98%"}}>
                            <span className="chart__label">
                                JavaScript
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "80%"}}>
                            <span className="chart__label">
                                ReactJS
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "95%"}}>
                            <span className="chart__label">
                                VueJS
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "82%"}}>
                            <span className="chart__label">
                                SQL
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "65%"}}>
                            <span className="chart__label">
                                NodeJS
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "85%"}}>
                            <span className="chart__label">
                                CSS
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "80%"}}>
                            <span className="chart__label">
                                Git
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "80%"}}>
                            <span className="chart__label">
                                Docker
                            </span>
                            </li>
                            <li className="chart__bar" style={{width: "60%"}}>
                            <span className="chart__label">
                                AWS
                            </span>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </div>
        )
    }
}
