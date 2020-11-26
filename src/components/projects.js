import React from 'react';
import c1 from '../images/cov1.PNG'
import c2 from '../images/cov2.PNG'
import c3 from '../images/cov3.PNG'


const Projects = () => {

    const farabout1 = () => {
       
        window.open("http://sabkhreed-lo.com/","_blank")          
    }

    const farabout2 = () => {
        window.open("https://fortnite-tracker-fb313.web.app/","_blank") 
    }

    const farabout3 = () => {
        window.open("https://syedrameezahmed18.github.io/about","_blank") 
    }

    return(
        <div className="projcont">
            <div className="projecttitle">
                <p>Major Projects</p>
            </div>
            <div className="procont">
                
                    <div class="uk-child-width-1-3@m catch" uk-grid uk-lightbox="animation: fade">
                        <div>
                            <a class="uk-inline" href={c1} onClick={farabout1} data-caption="http://sabkhreed-lo.com/">
                                <img src={c1} alt=""/>
                            </a>
                        </div>
                        <div>
                            <a class="uk-inline" href={c2} onClick={farabout2} data-caption="https://fortnite-tracker-fb313.web.app/">
                                <img src={c2} alt=""/>
                            </a>
                        </div>
                        <div>
                            <a class="uk-inline" href={c3} onClick={farabout3} data-caption="https://syedrameezahmed18.github.io/about">
                                <img src={c3} alt=""/>
                            </a>
                        </div>
                </div>
            </div>
        </div>)
}

export default Projects;