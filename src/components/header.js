import React, { useState, useContext, useEffect } from 'react';
import { GrMenu } from 'react-icons/gr'
import { Screencontext } from '../context'
import { Link } from 'react-router-dom'

const Header = () => {

    const { isscreen, setisscreen } = useContext(Screencontext);

    const redirections = (position) => {
        window.scrollTo(0, position)

    }
    return (
        <div className="headered">
            <div className="headerico">
                <p className="down">Port</p><p className="up">folio</p>
            </div>
            {isscreen > 800 ? (
                <div className="rightheader">
                    <p onClick={redirections.bind(this, 700)} className="wow">About</p>
                    <p onClick={redirections.bind(this, 1200)}>Services</p>
                    <p onClick={redirections.bind(this, 1800)}>Skills</p>
                    <p onClick={redirections.bind(this, 2600)}>Contact</p>

                </div>) : (
                <div className="mobileheader">
                    <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip"><GrMenu /></button>
                    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                        <div class="uk-offcanvas-bar">
                            <button class="uk-offcanvas-close" type="button" uk-close></button>
                            <p onClick={redirections.bind(this, 700)}>About</p>
                            <p onClick={redirections.bind(this, 1200)}>Services</p>
                            <p onClick={redirections.bind(this, 1800)}>Skills</p>
                            <p onClick={redirections.bind(this, 2600)}>Contact</p>
                        </div>
                    </div>
                </div>)
            }
        </div>)
}

export default Header;