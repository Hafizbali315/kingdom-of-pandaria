import TextBubble from '../assets/TextBubble.png'
import PandaGun from '../assets/PandaGun.png'

const Minting = () => {
	return (
		<div className="minting_section container_padding_x" id="minting">
			<h1>Minting</h1>
			<span>SUMMON YOUR INNER PANDARIAN AND JOIN THE REVOLUTION</span>
			<div className="row">
				<div className="col-lg-8">
					<div className="minting_card_left">
						<div className="left">
							<div className="img_container">
								<img src={PandaGun} alt="PandaGun" />
							</div>
						</div>

						<div className="right">
							<div className="img_container">
								<img src={TextBubble} alt="PandaGun" />

								<div className="text">
									You’re done for,
									<h6>SYNDICATE SCUM!</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="minting_card_right">
						<h2>Minting Price</h2>

						<h1>0.05 ETH</h1>

						<h3>$155.71</h3>

						<p>Pandas available for minting</p>

						<div className="pandas_availability">
							<div className="left">
								<div className="count">0/11</div>
								<span>Honorables</span>
							</div>
							<div className="middle">
								<div className="count">0/9977</div>
								<span>Mintables</span>
							</div>
							<div className="center">
								<div className="count">0/12</div>
								<span>Uniques</span>
							</div>
						</div>

						<div className="buttons">
							<button>Mint Now</button>
							<button>Bid on OpenSea</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Minting
