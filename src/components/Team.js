import TeamCard from './TeamCard'

const Team = () => {
	return (
		<div className="team container_padding">
			<h1>Team</h1>
			<span>Team THE ONES WHO MADE ALL OF THIS POSSIBLE</span>

			<div className="teams_row">
				<TeamCard title="PROJECT FOUNDER" name="SALTY" occupation="Pandaria Holdings" />
				<TeamCard title="PROJECT FOUNDER" name="COIN ALCHEMIST" occupation="Mad Chemist" />
				<TeamCard title="PROJECT FOUNDER" name="CHEMISTRY" occupation="King’s Army General" />
				<TeamCard title="PROJECT ARTIST" name="SILAS" occupation="Pandaria Phylarmonic" />
				<TeamCard title="DEVELOPER" name="DEGEN" occupation="Kingdom Security" />
				<TeamCard title="DEVELOPER" name="SABOTAGEBEATS" occupation="Upper Class Architect" />
				<TeamCard title="MARKETING DEPARTMENT" name="NOFEL" occupation="he Kingdom’s Drummer Boy" />
			</div>
		</div>
	)
}

export default Team
