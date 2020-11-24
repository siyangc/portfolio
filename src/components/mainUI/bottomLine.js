import React from 'react'
import './bottomLine.css'
export default function bottomLine(props) {
    return (
        <div id='bottomLine'>
            <div id='bottom-left-line'>
                <div 
                    id='bottom-left' 
                    className={props.pageIndex===0?'line bottom-left-hidden':'line bottom-left-show'}
                ></div>
            </div>
            <div id='bottom-right-line'>
                <div 
                    id='bottom-right'
                    className={props.pageIndex===0?'line bottom-right-hidden':'line bottom-right-show'}
                ></div>
            </div>
        </div>
    )
}
