import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const SecondSection = () => {


    return <div className="second-section">
        <div className="left-section">
            <div className="eight"><p>
                8
            </p>
            </div>
            <div className="six"><p>
                6
            </p>
            </div>
        </div>
        <div className="right-section">
            <div className="image-container">
                <div className="image1">
                    <img src="project.webp" />
                </div>
                <div className="image2">
                    <img src="bookshelf.webp" />
                </div>
            </div>
            <div className="one"><p>
                1
            </p>
            </div>
            <div className="nine">
                <p>9</p></div>
        </div>
    </div>
}

export default SecondSection