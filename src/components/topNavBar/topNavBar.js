import React, { Component } from 'react'
import TopNavBarLeft from './topNavBarLeft'
import TopBavBarRight from './topNavBarRight'

export default class topNavBar extends Component {


    render() {
        return (
            <div style={topNavBarStyle}>
                <TopNavBarLeft />
                <TopBavBarRight />
            </div>
        )
    };   
}

const topNavBarStyle = {
    background: "#ff3344",
    height: "30px",
    width: "100%",
    display: "flex",
}