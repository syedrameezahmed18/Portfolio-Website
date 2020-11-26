import React,{Fragment,useContext} from 'react';
import Pic from '../images/me.PNG';
import {Fade} from 'react-reveal';
import {Screencontext} from '../context'

const About = () => {

    let {isscreen,setisscreen} =useContext(Screencontext)

    return(
        <div className="widthwrap">
        <div className="aboutme">
            <Fade top>
                <div className="aboutheader">
                <p>About Me</p>
            </div>
            </Fade>
            {   isscreen > 800 ? (
            <Fragment>
            <div className="aboutcontent">
                <Fade left><div className="leftabout">
                    <img src={Pic} />
                </div></Fade>
                <Fade right><div className="rightabout">
                    <h2>Full-Stack Developer</h2>
                    <p>I am an undergraduate software engineer from NEDUET and currently working as a React
                     Developer and learning full-stack web development. Major technologies that i use include 
                     core HTML, CSS, JS, ES6, ReactJS, Nodejs, Expressjs, MySQL, Firebase and additional libraries
                    </p>
                </div>
                </Fade>
            </div> </Fragment>):(
                <Fragment>
                <div className="mobaboutcontent">
                <Fade left><div className="mobleftabout">
                    <img src={Pic} />
                    </div>
                    </Fade>
                    <Fade right><div className="mobrightabout">
                    <h2>Full-Stack Developer</h2>
                    <p>I am an undergraduate software engineer from NEDUET and currently working as a React
                     Developer and learning full-stack web development. Major technologies that i use include 
                     core HTML, CSS, JS, ES6, ReactJS, Nodejs, Expressjs, MySQL, Firebase and additional libraries
                    </p>
                </div>
                </Fade>
                </div>
                </Fragment>
            )
           
            }
            </div>
        </div>)
}

export default About;