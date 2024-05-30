import './App.css'
import { About, Experience, Footer, Header, Hero, Skills, Work } from './components'
import ReactGA from "react-ga"



const TRACKING_ID = "G-9KPMHSWRHL"
ReactGA.initialize(TRACKING_ID)
function App() {

  return (
    <div >
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
