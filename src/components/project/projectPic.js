import React,{useState,useEffect} from 'react'
import './projectPic.css'
export default function ProjectPic(props) {
    const [picIndex,setPicIndex] = useState(0)
    const [picClass,setPicClass] = useState('projectPic-show')
    const address = [
        '',
        '/photos/photo_001.jpg',
        '/photos/photo_002.jpg',
        '/photos/photo_003.jpg',
        '/photos/photo_004.jpg',
        ''
    ]
    useEffect(()=>{
        if(props.pageIndex!==0)
            setPicClass('projectPic-hidden')
        else if(props.pageIndex===0){
            setPicClass('projectPic-show')
        }
            
    },[props.pageIndex])
    return (
        <div id='projectPic-wrap'>
            <img 
                id='projectPic' 
                className={picClass}
                src={address[picIndex]}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectPic-hidden')
                        setPicIndex(props.pageIndex)
                        setPicClass('projectPic-show')                        
                }}
            />
        </div>
    )
}
