import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const SecondSection = () => {


    return <div className="second-section">
        <div className="left-section">
            <div className="eight">8</div>
            <div className="six">6</div>
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
            <div className="one">1</div>
            <div className="nine">9</div>
        </div>
    </div>
}

export default SecondSection