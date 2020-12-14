import React,{useContext,useState,Fragment,useRef} from 'react';
import gh from '../images/newgh.png';
import wa from '../images/neww.png';
import email from '../images/gmail.png'
import {Screencontext} from '../context.js'
import { GrFacebook } from 'react-icons/gr';
import linkedin from '../images/linkedin.png';
import fb from '../images/facebook.png';
import Scroll from 'react-scroll';

const Footer = () => {

    const {isscreen,setisscreen} = useContext(Screencontext);
    const [copy,setcopy] = useState("");
    const textAreaRef = useRef(null);

   
    const outer = (param) => {
        var scroll = Scroll.animateScroll;
        
         if(param === "l") {
            window.location.href ="https://www.linkedin.com/in/syed-rameez-ahmed-6b5984199/"
        }
        else if(param === "f") {
            window.location.href ="https://www.facebook.com/rameez.ahmed.5492/"
        }
       
        else if(param === "g") {
            window.location.href ="https://github.com/syedrameezahmed18"
        }
    }

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

        <div className="footer">
            <div className="toplayer">
                <img onClick={()=>{navigator.clipboard.writeText('03052371366') 
                setcopy('Copied')
                alert(`Copied 03052371366`)}} src={wa} title="whatsapp"/>
                <img onClick={()=>outer("l")} src={linkedin} title="LinkedIn" />
                <img onClick={()=>outer("f")} src={fb} title="facebook" />
                <img onClick={()=>{navigator.clipboard.writeText('noir.ramsam@gmail.com')
                setcopy('Copied')
                alert(`Copied noir.ramsam@gmail.com`)}} src={email} title="gmail" />
                <img onClick={()=>outer("g")} src={gh} title="github" />
            </div>
            
            <div className="topmiddle">
                <p className="justset" onClick={redirections}>About</p>
                <p onClick={redirections2}>Services</p>
                <p onClick={redirections3}>Skills</p>
                <p onClick={redirections4}>Contact</p>
            </div>
            <div className="middlelayer">
            {   isscreen > 800 ? (
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.271795157782!2d67.11231761447952!3d24.95686574753434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3475ef3e7018d%3A0x322eef59855cccf!2sGulshan-e-kaneez%20Fatima%20block%204!5e0!3m2!1sen!2s!4v1606401972963!5m2!1sen!2s" 
                    width="800" 
                    height="280" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>):
                    (<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.271795157782!2d67.11231761447952!3d24.95686574753434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3475ef3e7018d%3A0x322eef59855cccf!2sGulshan-e-kaneez%20Fatima%20block%204!5e0!3m2!1sen!2s!4v1606401972963!5m2!1sen!2s" 
                    width="300" 
                    height="160" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>)
                    }
            </div>
            <div className="lowerfooter">
                <p>Syed Rameez Ahmed Portfolio &copy; 2020</p>
                </div>
        </div>)
}

export default Footer;

{/*<div className="upperfooter">
                <div className="upperleft">
                    
                </div>
                <div className="upperright">
                    <h3>Contact Me</h3>
                    <div>
                        <img src={gh} />
                        <a href="https://github.com/syedrameezahmed18" target="_blank">Github</a>
                    </div>
                    <div>
                        <img src={email} />
                        <p>Gmail : noir.ramsam@gmail.com</p>
                    </div>
                    <div className="fixx">
                        <img className="he" src={wa} />
                        <p>Whatsapp : 0305-2371366</p>
                    </div>
                </div>
            </div>
            */}