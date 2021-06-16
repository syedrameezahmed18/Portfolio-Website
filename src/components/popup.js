import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Fade } from 'react-reveal'
import './../App.css'

export default function PopUp() {

    const [height, setHeight] = useState(0);

    const heightChange = () => {
        console.log(window.pageYOffset)
        setHeight(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener("scroll", heightChange)
        return () => window.removeEventListener("scroll", heightChange)

    })

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            {
                height > 800 ? (
                    <Fade bottom>
                        <button className="to-top" onClick={scrollToTop}>
                            <AiOutlineArrowUp />
                        </button>
                    </Fade>
                ) : (null)
            }

        </>
    )
}
