import React from 'react'
import './rightLine.css'
export default function rightLine(props) {
    return (
        <div id='rightLine'>
            <div id='right-top-line'>
                <div 
                    id='right-top' 
                    className={props.pageIndex===0?'line right-top-hidden':'line right-top-show'}
                ></div>
            </div>
            <div id='right-bottom-line'>
                <div 
                    id='right-bottom'
                    className={props.pageIndex===0?'line right-bottom-hidden':'line right-bottom-show'}
                ></div>
            </div>
        </div>
    )
}
