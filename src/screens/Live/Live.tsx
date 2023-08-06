import Title from "../../components/Title/Title";
import "./Live.scss"

const Live = () => {
    return(
        <div className="live-content">
            <Title text="Live" />
            {/* <iframe src="https://rds.live/traditional-tv/"allowFullScreen title="Live" className="live-iframe"></iframe> */}
        </div>
    )
}

export default Live;

{/* <div style={{ overflow: 'hidden', position: 'relative' }}>
<iframe src="https://rds.live/traditional-tv/" width="640" height="360" allowFullScreen title="Live"
style={{ position: 'absolute', clip: 'rect(500px, 0, 500px, 0)', top: '-500px', left: 0}}></iframe>
</div> */}