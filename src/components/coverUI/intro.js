import React from 'react'
import './intro.css'
export default function intro() {
    return (
        <div id='intro'>
            <div id='intro-text'>
                <div className='intro-text-block'>
                    <p className='intro-text'>
                        <span id='intro-text-spe'>
                            I'M A SOFTWARE ENGINEER&nbsp;
                        </span>
                        from China living in Docklands, where I work as a Junior Software
                        Engineer at Zen Element. With a background in Infomation Technology,
                        my strength lies in website and app development.
                    </p>
                </div>
                <div className='intro-text-block'>
                    <p id='intro-text-last' className='intro-text'>
                        If you want to know more about me, my work or if you're
                        a Hiring Manager wants to offer me a new position, feel free 
                        to contact me on chengsiyang.developer@gmail.com
                    </p>
                </div>
            </div>
            <img src='/photos/selfie.png'/>
        </div>
    )
}
