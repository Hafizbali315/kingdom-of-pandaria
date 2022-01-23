import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Minting from './components/Minting'
import Gallery from './components/Gallery'
import FAQs from './components/FAQs'

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Minting />
			<Gallery />
			{/* Roadmap */}
			{/* Team */}
			<FAQs />
		</div>
	)
}

export default App
