import React, { Component } from 'react'

export default class topNavBarLeft extends Component {
    render() {
        return (
            <div style={topNavBarLeftStyle}>
                <p>
                    contact: chengsiyang.developer@gmail.com
                </p>                
            </div>
        )
    }
}

const topNavBarLeftStyle = {
    width: "250px",
    fontSize: "0.8rem",
}