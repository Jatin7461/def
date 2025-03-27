import Marquee from "./Marquee"

const LandingImage = () => {
    return <div className="landing-image">
        <div className="landing-image-container">
            <img src="city.webp" />
            <Marquee name="image-marquee" />
        </div>
        <Marquee name="first-section-marquee" />

    </div>
}

export default LandingImage