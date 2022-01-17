import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import Typical from 'react-typical';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='#' target="_blank">
                            <Icon.Linkedin />
                        </a>                        
                        <a href='#' target="_blank">
                            <Icon.Github />
                        </a>                                              
                        <a href='#' target="_blank">
                            <Icon.PatchCheckFill />
                        </a>                        
                        <a href='#' target="_blank">
                            <Icon.FilePdf />
                        </a>                        
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Ygor</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                         <span className='primary-text'>
                             {" "}
                             <h1>
                                {" "}
                                <Typical loop={Infinity} 
                                steps={["Why do Java programmers have to wear glasses? Because they don’t C#.",1000,
                                "A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?’",1000,
                                "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", 1000 ]} />
                             </h1>
                         </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
