import { FaDiscord } from 'react-icons/fa'
import { BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import FooterLogo from '../assets/FooterLogo.png'

const Footer = () => {
	return (
		<div className="footer container_padding container_margin_top">
			<div className="left">
				<h5>GET ON THE WAITLIST</h5>
				<p>
					Can’t wait? Neither can we!
					<br />
					Type in your email address and join the limited spot waitlist
				</p>

				<div className="input_container">
					<input type="text" placeholder="Email Address" />
					<button>
						<HiOutlineArrowNarrowRight />
					</button>
				</div>
			</div>
			<div className="middle">
				<img src={FooterLogo} alt="FooterLogo" />
			</div>
			<div className="right">
				<div className="social_icons">
					<a href="https://www.youtube.com/">
						<BsYoutube className="icon" />
					</a>

					<a href="https://www.instagram.com/">
						<BsInstagram className="icon" />
					</a>

					<a href="https://discord.com/">
						<FaDiscord className="icon" />
					</a>

					<a href="https://twitter.com/">
						<BsTwitter className="icon" />
					</a>
				</div>

				<p>(c) 2021 Pandaria Kingdom</p>
				<span> All rights reserved.</span>

				<div className="links">
					<div className="terms">Terms & Conditions</div>
					<div className="privacy">Privacy Policy</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
