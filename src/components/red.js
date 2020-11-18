import React, {useState, useEffect,useRef }from 'react'
import Redc from './redc'
import {useSelector, useDispatch} from 'react-redux';
import {transitionEnd,transitionRun} from '../actions/transitionStatus'
import './red.css'
export default function Red(props) {
      

    return (
        <div
         style={{background:'red',height:'100vh'}}
         id='red'
        >
            <Redc css={props.cc} css1={props.dd}/>
        </div>
    )
}
