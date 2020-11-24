import React from 'react'
import './leftLine.css'
export default function leftLine(props) {
    return (
        <div id='leftLine'>
            <div id='left-top-line'>
                <div 
                    id='left-top' 
                    className={props.pageIndex===0?'line left-top-hidden':'line left-top-show'}
                ></div>
            </div>
            <div id='left-bottom-line'>
                <div 
                    id='left-bottom'
                    className={props.pageIndex===0?'line left-bottom-hidden':'line left-bottom-show'}
                ></div>
            </div>
        </div>
    )
}
