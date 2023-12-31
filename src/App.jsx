import './App.css'
import About from './Componants/About'
import CopyRights from './Componants/CopyRights'
import Footer from './Componants/Footer'
import Home from './Componants/Home'
import Navbar from './Componants/Navbar'
import ProjectContainer from './Componants/ProjectContainer'
import TimeLine from './Componants/TimeLine'


function App() {

  return (
    <main>
      <Navbar />
      <Home/>
      <About />
      <TimeLine />
      <ProjectContainer />
      <Footer />
      <CopyRights />
    </main>
  )
}

export default App
