import BackgroundLoopVideo from '../assets/BackgroundLoopVideo.mp4'
import LogoWhite from '../assets/LogoWhite.png'

const Hero = () => {
	return (
		<div className="hero" id="hero">
			<video className="video_backgorund" autoPlay muted loop id="background_video" controls="nodownload">
				<source src={BackgroundLoopVideo} type="video/mp4" />
			</video>

			<div className="content_overlay">
				<div className="content">
					<div className="logo">
						<img src={LogoWhite} alt="LogoWhite" />
					</div>

					<p>THE TIME HAS COME FOR YOU TO </p>
					<h1>
						Join the Coalition and fight <br /> for Pandaria’s freedom
					</h1>

					<div className="buttons">
						<button className="join_discord">Join Discord</button>
						<button className="view_on_opensea">View on Opensea</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
