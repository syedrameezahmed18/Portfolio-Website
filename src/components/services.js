import React from 'react';
import webapp from '../images/card1.jpg';
import s from '../images/s1.jpg'
import c from '../images/c1.jpeg'
import Flip from 'react-reveal/Flip'

const Services = () => {
    return(
        <div className="service">
            <div className="servercont">
                <p className="serveheader">Services</p>
            </div>
            <div className="servcon">
                <Flip top>
               <div class="uk-text-center">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src={webapp} alt=""/>
                        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                            <p class="uk-h4 uk-margin-remove">Web Development</p>
                        </div>
                    </div>    
                </div>
                </Flip>
                <Flip bottom>
               <div class="uk-text-center">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src={s} alt=""/>
                        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                            <p class="uk-h4 uk-margin-remove">Web Designing</p>
                        </div>
                    </div>    
                </div>
                </Flip>
                <Flip top>
               <div class="uk-text-center">
                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src={c} alt=""/>
                        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                            <p class="uk-h4 uk-margin-remove">Deployment</p>
                        </div>
                    </div>    
                </div>
                </Flip>
            </div>
        </div>)
}

export default Services;