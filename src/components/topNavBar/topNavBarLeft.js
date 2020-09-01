import React, { Component } from 'react'

export default class topNavBarLeft extends Component {
    render() {
        return (
            <div style={topNavBarLeftStyle}>
                <p style={contextStyle}>
                    chengsiyang.developer@gmail.com
                </p>                
            </div>
        )
    }
}

const topNavBarLeftStyle = {
    minWidth: "200px",    
    lineHeight: "20px",
    padding: "5px"
}

const contextStyle = {
    fontSize: "0.7rem",
    fontWeight: "bold",
    color: "gold"
}