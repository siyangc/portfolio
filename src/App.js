import React, {useState, useEffect,useRef } from 'react'
import Blue from './components/blue'
import Red from './components/red'

import {useSelector, useDispatch} from 'react-redux';
import {transitionEnd,transitionRun} from './actions/transitionStatus'
import {pageDown, pageUp} from './actions/flipPage'
export default function App() {
  const dispatch = useDispatch()
  const innerRef = useRef(null);
  const [page,setPage] = useState(0);
  const [cc,setCc] = useState('aaa')
  const [dd,setDd] = useState('aaa')
  const loadStatus = useSelector(state=>state.loadStatus)
  const pageIndex = useSelector(state=>state.pageIndex)
  const switchPage = (e) => {
    console.log(loadStatus)
    if(loadStatus){
        if(pageIndex!==0){
          if(e.deltaY>0){
            dispatch(pageDown())
          }
              
          else if(e.deltaY<0){
            dispatch(pageUp())            
          }
          
        }else if(pageIndex===0){
          if(e.deltaY>0){
            dispatch(pageDown())
          }
        }
    }         

  }
  useEffect(()=>{
    const div = innerRef.current;
    div.addEventListener('transitionrun', loadCSS);
    return ()=>{div.removeEventListener('transitionrun',loadCSS)}
  },[])

  const loadCSS = () => {
      dispatch(transitionRun())
  }
  return (

    <div  
      ref={innerRef}
      onWheel={switchPage}
    >
      <Blue
        onTransitionEnd={()=>{
          dispatch(transitionEnd())
        }}
      />
      <Red/>
    </div>

  )
}
