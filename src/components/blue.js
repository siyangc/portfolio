import React, {useState } from 'react'
import './blue.css'
import {transitionEnd,transitionRun} from '../actions/transitionStatus'
import {useSelector, useDispatch} from 'react-redux';
export default function Blue(props) {
    const [cvv, setCvv] = useState('move move1');
    const dispatch = useDispatch()
    const transitionStatus = useSelector(state=>state.transitionStatus)

    
    return (
        <div 
            style={{background:'blue'}}
            className={cvv}
        >
            
        </div>
    )
}
