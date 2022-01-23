import { useRef } from 'react'

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

import SquidGameCircle from '../assets/SquidGameCircle.png'
import Zombie from '../assets/Zombie.png'
import CA from '../assets/CA.png'
import Pimp from '../assets/Pimp.png'

const Gallery = () => {
	const scrollRef = useRef(null)

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				top: 0,
				left: -330,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				top: 0,
				left: 330,
				behavior: 'smooth',
			})
		}
	}

	const NftsArray = [
		{
			id: 0,
			category: 'UNIQUE ARTIFACT',
			name: 'Panda Game Circle Guard ',
			minimumBid: '0.1 ETH',
			highestBid: '0.05 ETH',
			image: SquidGameCircle,
		},
		{
			id: 1,
			category: 'UNIQUE ARTIFACT',
			name: 'Zombie Panda',
			minimumBid: '0.1 ETH',
			highestBid: '0.05 ETH',
			image: Zombie,
		},

		{
			id: 2,
			category: 'HONORARY ARTIFACT',
			name: 'Coin Alchemist',
			minimumBid: '5.5 ETH',
			highestBid: '0.95 ETH',
			image: CA,
		},

		{
			id: 3,
			category: 'UNIQUE ARTIFACT',
			name: 'Pimp Panda',
			minimumBid: '5.5 ETH',
			highestBid: '0.95 ETH',
			image: Pimp,
		},
		{
			id: 4,
			category: 'UNIQUE ARTIFACT',
			name: 'Panda Game Circle Guard ',
			minimumBid: '0.1 ETH',
			highestBid: '0.05 ETH',
			image: SquidGameCircle,
		},
		{
			id: 5,
			category: 'UNIQUE ARTIFACT',
			name: 'Zombie Panda',
			minimumBid: '0.1 ETH',
			highestBid: '0.05 ETH',
			image: Zombie,
		},

		{
			id: 6,
			category: 'HONORARY ARTIFACT',
			name: 'Coin Alchemist',
			minimumBid: '5.5 ETH',
			highestBid: '0.95 ETH',
			image: CA,
		},

		{
			id: 7,
			category: 'UNIQUE ARTIFACT',
			name: 'Pimp Panda',
			minimumBid: '5.5 ETH',
			highestBid: '0.95 ETH',
			image: Pimp,
		},
	]

	return (
		<div className="gallery_section container_padding" id="gallery">
			<div className="heading">
				<div className="text">
					<h1>Gallery</h1>
					<span>BROWSE OUR WIDE CATALOG OF UNIQUES, HONORARIES & ALREADY MINTED PANDAS</span>
				</div>

				<div className="icons">
					<div className="icon_container" onClick={scrollLeft}>
						<HiOutlineArrowNarrowLeft className="icon" />
					</div>
					<div className="icon_container" onClick={scrollRight}>
						<HiOutlineArrowNarrowRight className="icon" />
					</div>
				</div>
			</div>

			<div className="carusal_container" ref={scrollRef}>
				{NftsArray.map((item) => (
					<div className="carusal_card" key={item.id}>
						<div className="carusal_img">
							<img src={item.image} alt="images" />
						</div>

						<div className="content">
							<span>{item.category}</span>

							<div className="name_price">
								<h4>{item.name}</h4>
								<div className="price">{item.minimumBid}</div>
							</div>

							<p>
								Current Highest Bid <span> {item.highestBid}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gallery
