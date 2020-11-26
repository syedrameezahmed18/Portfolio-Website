import React,{useState,useContext,useEffect} from 'react';
import {GrMenu} from 'react-icons/gr'
import {Screencontext} from '../context'
import {Link} from 'react-router-dom'

const Header = () => {

    const {isscreen,setisscreen} = useContext(Screencontext);

    const redirections = () => {
        console.log('ok');
        window.scrollTo(0,700)
    }
    const redirections2 = () => {
        console.log('ok');
        window.scrollTo(0,1200)
    }
    const redirections3 = () => {
        console.log('ok');
        window.scrollTo(0,1800)
    }
    const redirections4 = () => {
        console.log('ok');
        window.scrollTo(0,2600)
    }
    
    return(
        <div className="headered">
            <div className="headerico">
                <p className="down">Port</p><p className="up">folio</p>  
            </div>
            {   isscreen > 800 ? (
            <div className="rightheader">
                <p onClick={redirections} className="wow">About</p>
                <p onClick={redirections2}>Services</p>
                <p onClick={redirections3}>Skills</p>
                <p onClick={redirections4}>Contact</p>
                
            </div>  ):(  
            <div className="mobileheader">
                <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip"><GrMenu /></button>
                <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                    <div class="uk-offcanvas-bar">
                        <button class="uk-offcanvas-close" type="button" uk-close></button>
                        <p onClick={redirections}>About</p>
                        <p onClick={redirections2}>Services</p>
                        <p onClick={redirections3}>Skills</p>
                        <p onClick={redirections4}>Contact</p>
                    </div>
                </div>
            </div>)
            }
        </div>)
}

export default Header;