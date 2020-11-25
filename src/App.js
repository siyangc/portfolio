import React from 'react'
import Cover from './components/cover'
import Main from './components/main'
import {useSelector, useDispatch} from 'react-redux';
import {transitionRun} from './actions/transitionStatus'
import {pageDown, pageUp} from './actions/flipPage'
export default function App() {
  const dispatch = useDispatch()

  const loadStatus = useSelector(state=>state.loadStatus)
  const pageIndex = useSelector(state=>state.pageIndex)
  const switchPage = (e) => {
    console.log(loadStatus)
    if(loadStatus){
        if(pageIndex>0&&pageIndex<4){
          if(e.deltaY>0){
            dispatch(pageDown())
            dispatch(transitionRun())
          }
              
          else if(e.deltaY<0){
            dispatch(pageUp())    
            dispatch(transitionRun())
          }
          
        }else if(pageIndex===0){
          if(e.deltaY>0){
            dispatch(pageDown())  
            dispatch(transitionRun())          
          }
        }else if(pageIndex===4){
          if(e.deltaY<0){
            dispatch(pageUp())
            dispatch(transitionRun())
          }
        }
        
    }         
    
  }

  return (

    <div  
      onWheel={switchPage}
    >
      <Cover       
        pageIndex={pageIndex}
      />
      <Main
        pageIndex={pageIndex}        
      />
    </div>

  )
}
