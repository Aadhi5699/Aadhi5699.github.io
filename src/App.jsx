import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Solutions from './sections/Solutions'
import ProcessFlow from './sections/ProcessFlow'
import Statistics from './sections/Statistics'
import CaseStudies from './sections/CaseStudies'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <Solutions />
            <ProcessFlow />
            <Statistics />
            <CaseStudies />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
