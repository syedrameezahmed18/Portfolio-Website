import React from 'react'
import { Fade } from 'react-reveal'

export default function Contact() {


    const formSubmission = (e) => {
        e.preventDefault()
    }


    return (
        <Fade left>
            <div className="main-contact">
                <div className="servecont">
                    <p className="serveheader">Contact Me</p>
                </div>
                <form onSubmit={formSubmission} className="contact-form">
                    <div className="contact-form-i1">
                        <label>Name</label>
                        <input className="form-control cfi1" type="name" />
                    </div>
                    <div className="contact-form-i2">
                        <label>Message</label>
                        <textarea className="form-control cfi2" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button type="submit" className="btn btn-warning" style={{ color: 'white' }}>Submit</button>
                    </div>
                </form>
            </div>
        </Fade>
    )
}
