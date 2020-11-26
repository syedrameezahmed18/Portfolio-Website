import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/j2.png';
import es6 from '../images/es6.png';
import bootstrap from '../images/b1.png';
import uikit from '../images/uikit.png';
import r from '../images/react.png';
import node from '../images/n.png';
import ms from '../images/mysql.png';
import mu from '../images/materialui.png';
import fb from '../images/firebase.png';
import Fade from 'react-reveal/Fade'


const Tech = () => {
    return(
        <div className="tech">
            <div className="techheader">
                <p>Technologies</p>
            </div>
            <div className="logocont">
                <Fade left>
                <img src={html} title="html"/>
                <img src={css} title="css"/>
                <img src={js} title="javascript"/>
                </Fade>
                <Fade right>
                <img src={es6} title="es6"/>
                <img src={bootstrap} title="bootstrap"/>
                <img src={uikit} title="ui-kit"/>
                </Fade>
                <Fade left>
                <img src={r} title="reactjs"/>
                <img src={node} title="nodejs"/>
                <img src={ms} title="mysql"/>
                </Fade>
                <Fade right>
                <img src={mu} title="material ui"/>
                <img src={fb} title="firebase"/>
                </Fade>
            </div>
        </div>)
}

export default Tech;