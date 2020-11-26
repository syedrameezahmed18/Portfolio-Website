import React,{Fragment} from 'react';
import Typewriter from 'typewriter-effect';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade'

const Cover = () => {
    return(
        <div className="coverbegins">
            <div className="ninety">
            <div className="topy">
                
                 <Typing speed={15} >
                     <div>
                         <p className="s1">Hello, i am</p>
                     </div>
                     <div>
                         <p className="s2">Syed Rameez Ahmed</p>
                     </div>
                     <div>
                         
                         <Fragment>  
                             
                         <p className="s3">Front-end JavaScript developer</p>
                         <Typing.Backspace count={30} delay={1000} />
                         <p className="s3">Nodejs developer</p>
                         <Typing.Backspace count={16} delay={1000} />
                         <p className="s3">React developer</p>   
                         </Fragment> 
                        
                        
                     </div>
                 </Typing> 
                
            </div>
            <Fade right><div className="covimg">
                {/*Cover img from css */}
            </div>
            </Fade>
            
            </div>
        </div>)
}
export default Cover;