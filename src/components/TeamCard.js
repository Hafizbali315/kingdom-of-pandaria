import SquidGameCircle from '../assets/SquidGameCircle.png'

const TeamCard = ({ title, name, occupation }) => {
	return (
		<div className="team_card">
			<div className="img_container">
				<img src={SquidGameCircle} alt="SquidGameCircle" />
			</div>

			<div className="content">
				<h4>{title}</h4>
				<h2>{name}</h2>
				<p>
					Current occupation: <span>{occupation}</span>
				</p>
			</div>
		</div>
	)
}

export default TeamCard
