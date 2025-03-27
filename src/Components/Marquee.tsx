
// interface props = {
//     classname: String
// }

const Marquee = ({ name }: any): any => {
    return <div className={`marquee ${name}`}>
        <p className="marquee-text">
            urban planning + Architecture
        </p>
        <p className="marquee-text">urban planning + architecture</p>
    </div>
}

export default Marquee