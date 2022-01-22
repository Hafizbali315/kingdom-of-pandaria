import BrothersImg from '../assets/BrothersImg.png'

const About = () => {
	return (
		<div className="about container_padding" id="about">
			<div className="row">
				<div className="col-lg-7">
					<div className="text">
						<h1>About us</h1>
						<span>WELCOME TO THE KINGDOM OF PANDARIA</span>

						<p>
							The ever-blossoming Kingdom of Pandaria has been stripped of its freedom and is now under the rule of a crooked mafia
							organization called The Syndicate. Pandarians were slowly losing hope in their former king ever regaining control of their
							once prosperous and beloved land, until rumors came around that an old underground organization called The Syndicate has come
							back into light and is planning to overthrow and eradicate The Syndicate once and for all.
						</p>

						<p>Will you join the revolution, stand with the citizens of Pandaria and fight against The Syndicate?</p>
					</div>
				</div>
				<div className="col-lg-5 mt-lg-0 mt-3">
					<div className="brothers_img">
						<img src={BrothersImg} alt="BrothersImg" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
