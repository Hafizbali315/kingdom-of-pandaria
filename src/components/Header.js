import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

	useEffect(() => {
		if (showSmallScreenMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [showSmallScreenMenu])

	return (
		<div className="header container_padding_x">
			<div className="logo">
				<h6>
					Kingdom of <span>Pandaria</span>
				</h6>
			</div>
			<div className="links">
				<ul>
					<li className="active">Homepage</li>
					<li>About</li>
					<li>Gallery</li>
					<li>Roadmap</li>
					<li>Lore</li>
					<li>Team</li>
					<li>F.A.Q.</li>
				</ul>
			</div>
			<div className="buttons">
				<button className="mint_button">Mint a Panda</button>
				<button className="connet_button">Connect Wallet</button>
			</div>

			<div className="hamburder_menu">
				{showSmallScreenMenu ? (
					<div className="icon" onClick={() => setShowSmallScreenMenu(false)}>
						{' '}
						X{' '}
					</div>
				) : (
					<GiHamburgerMenu className="icon" onClick={() => setShowSmallScreenMenu(true)} />
				)}
			</div>

			{showSmallScreenMenu && (
				<div className="sm_screen_menu">
					<div className="sm_screen_links">
						<ul>
							<li className="active">Homepage</li>
							<li>About</li>
							<li>Gallery</li>
							<li>Roadmap</li>
							<li>Lore</li>
							<li>Team</li>
							<li>F.A.Q.</li>
							<li>
								<button className="mint_button">Mint a Panda</button>
							</li>
							<li>
								<button className="connet_button">Connect Wallet</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Header
