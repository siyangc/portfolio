import React,{useState,useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {transitionEnd,transitionRun} from '../actions/transitionStatus'
import './redc.css'
export default function Redc(props) {
    const dispatch = useDispatch();
    const a = ['aaaaaaaa','bbbbbbbbbbb']
    const innerRef = useRef(null);
    const transitionStatus = useSelector(state=>state.transitionStatus)

    const [aa,setAa] = useState(0)
    return (
        <div>
            <div 
                className={props.css}
                ref={innerRef}
             onTransitionEnd={()=>setAa(props.page)}
            >
                {a[aa]}
            </div>
            <div 
            className={props.css1}
            onTransitionEnd={()=>dispatch(transitionEnd())}
            >
                dfgrtttttt
            </div>
        </div>
    )
}
