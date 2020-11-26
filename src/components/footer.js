import React,{useContext,useState,Fragment} from 'react';
import gh from '../images/github.png';
import wa from '../images/neww.png';
import email from '../images/gmail.png'
import {Screencontext} from '../context.js'

const Footer = () => {

    const {isscreen,setisscreen} = useContext(Screencontext);
    return(

        <div className="footer">
            <div className="upperfooter">
                <div className="upperleft">
                    {   isscreen > 800 ? (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.271795157782!2d67.11231761447952!3d24.95686574753434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3475ef3e7018d%3A0x322eef59855cccf!2sGulshan-e-kaneez%20Fatima%20block%204!5e0!3m2!1sen!2s!4v1606401972963!5m2!1sen!2s" 
                    width="500" 
                    height="220" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>):
                    (<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.271795157782!2d67.11231761447952!3d24.95686574753434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3475ef3e7018d%3A0x322eef59855cccf!2sGulshan-e-kaneez%20Fatima%20block%204!5e0!3m2!1sen!2s!4v1606401972963!5m2!1sen!2s" 
                    width="200" 
                    height="140" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>)
                    }
                </div>
                <div className="upperright">
                    <h3>Contact Me</h3>
                    <div>
                        <img src={gh} />
                        <p>Github</p>
                    </div>
                    <div>
                        <img src={email} />
                        <p>Gmail</p>
                    </div>
                    <div className="fixx">
                        <img className="he" src={wa} />
                        <p>Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="lowerfooter">
                <p>Syed Rameez Ahmed Portfolio &copy; 2020</p>
            </div>
        </div>)
}

export default Footer;