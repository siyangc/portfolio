import React,{useState,useEffect} from 'react'
import './projectText.css'
export default function ProjectText(props) {
    const [textIndex,setTextIndex] = useState(0)
    const textTitle = ['','SERVICE','LIFE','BUSINESS','GAME','']
    const textContent = [
        '',
        'Element Migration was established in 2001, since then we have provided migration and recruitment services for over a thousand successful clients. We always provide best services',
        'Discover the true meaning of relaxation in a region known for its celebration of the senses, the villa offers pure indulgence for your conference delegates or wedding guests',
        'ZEN ELEMENT PROPERTY GROUP PTY. LTD. is located in MELBOURNE, VICTORIA, Australia and is part of the Real Estate Industry. This website introduces the basic business there.',
        'It is a recreation of Doodle Jump that originally comes for Android and IOS devices. This game is created using React, Redux and vanilla JavaScript. No third-party libraries were imported.',
        ''
    ]
    const [projectTextLineClass,setProjectTextLineClass] = useState('projectText-line-show')
    const [projectTextTitleClass,setProjectTextTitleClass] = useState('projectText-title-show')
    const [projectTextContentClass,setProjectTextContentClass] = useState('projectText-content-show')
    useEffect(()=>{
        if(props.pageIndex!==0){
            setProjectTextLineClass('projectText-line-hidden')
            setProjectTextTitleClass('projectText-title-hidden')
            setProjectTextContentClass('projectText-content-hidden')
        }else if(props.pageIndex===0){
            setProjectTextLineClass('projectText-line-hidden-immediatly')
            setProjectTextTitleClass('projectText-title-hidden-immediatly')
            setProjectTextContentClass('projectText-content-hidden-immediatly')
        }
            
    },[props.pageIndex])
    return (
        <div id='projectText'>
            <div id='projectText-title-wrap'>
                <div 
                id='projectText-title'
                className={projectTextTitleClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectText-title-hidden')
                        setTextIndex(props.pageIndex)
                        setProjectTextTitleClass('projectText-title-show')                        
                }}
                >
                    {textTitle[textIndex]}
                </div>
                &nbsp;
            </div>


            <div id='projectText-line-wrap'>
                <div 
                id='projectText-line'
                className={projectTextLineClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectText-line-hidden')
                        setProjectTextLineClass('projectText-line-show')                        
                }}
                ></div>
            </div>

            <div id='projectText-content-wrap'>
                <div 
                id='projectText-content'
                className={projectTextContentClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectText-content-hidden')
                        setTextIndex(props.pageIndex)
                        setProjectTextContentClass('projectText-content-show')                        
                }}
                >
                    {textContent[textIndex]}
                </div>
            </div>
        </div>
    )
}
