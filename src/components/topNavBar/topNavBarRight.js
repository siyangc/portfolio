import React, { Component } from 'react'
//import githubIcon from '../../public/icons/GitHub-Mark-32px.png'
import {Mobile, Default} from '../../configs/mediaQueryBreakPoint'

export default class topNavBarRight extends Component {
    
    render() {        
        return (
            <div style={topNavBarRightStyle}>
                <Default>                    
                    <ul style={listStyle}>
                        <li style={itemStyle}>
                            <img style={iconStyle}
                                    src="/icons/gitHub.png" 
                                    alt="github"
                                    onClick = {e => window.open("https://github.com/siyangc",'_blank')}                                  
                            />
                        </li>
                        <li style={itemStyle}>
                            <img style={iconStyle}
                                    src="/icons/facebook.png" 
                                    alt="facebook"
                                    onClick = {e => window.open("https://www.facebook.com/smrcsy",'_blank')}                                    
                                    
                            />
                        </li>
                        <li style={itemStyle}>
                            <img style={iconStyle}
                                    src="/icons/linkedin.png" 
                                    alt="linkedin"
                                    onClick = {e => window.open("https://www.linkedin.com/in/siyangc",'_blank')}                                        
                            />
                        </li>
                    </ul>
                    
                </Default>
                <Mobile>
                    haha
                </Mobile>
            </div>
            
        )
    }
}


const topNavBarRightStyle = {
    width: "100%",
    paddingRight: "5px"
}
const listStyle = {    
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-end",
    height: "30px"
}

const itemStyle = {
    width: "30px",
    marginLeft: "5px",
    marginRight: "10px",
    padding: "5px",
}

const iconStyle = {
    width: "20px",
    cursor: "pointer"
}