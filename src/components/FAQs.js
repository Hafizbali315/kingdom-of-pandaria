import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const FAQs = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			question: 'What exactly is Kingdom of Pandaria?',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},

		{
			id: 1,
			question: 'What can I do with a minted panda?',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},

		{
			id: 2,
			question: 'What are the ways to get a panda and join the fight against The Syndicate?',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},

		{
			id: 3,
			question: 'What kind of wallet do I need?',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},

		{
			id: 4,
			question: 'How can I get on the waitlist for the release?',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},

		{
			id: 5,
			question: 'How can become eligible to receive a super rare held back panda',
			answer:
				'Kingdom of Pandaria is a collection of 10,000 unique hand-drawn NFT digital identities which grant you the chance to rise and fight against The Syndicate. By purchasing a panda, you will gain the status of Pandarian (Citizen of the Kingdom of Pandaria) and will be eligible to join the fight against The Syndicate. You will also gain exclusive access to our members only merch store.',
		},
	]

	const [clicked, setClicked] = useState(false)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null)
		}
		setClicked(index)
	}

	return (
		<div className="faqs_section container_padding">
			<h1>Frequently asked questions</h1>
			<span>FOR ADDITIONAL QUESTIONS AND CURIOSITIES, PLEASE JOIN OUR DISCORD SERVER</span>

			<div className="faq_container">
				{QuestionsAnswerArray.map((item, index) => (
					<div>
						<div className="question_heading" onClick={() => toggle(index)} key={index}>
							<h4>{item.question}</h4>
							<div className="icon_container">{clicked === index ? <FiMinus className="icon" /> : <FiPlus className="icon" />}</div>
						</div>

						{clicked === index ? (
							<div className="answer_dropdown">
								<p>{item.answer}</p>
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQs
