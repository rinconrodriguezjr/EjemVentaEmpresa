import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import Teams from './Components/Teams'
import TeamGroups from './Components/TeamGroups'
import ProjectsList from './Components/ProjectsList'
import ProjectDetail from './Components/ProjectDetail'
import TechnologiesDetail from './Components/TechnologiesDetail'
import Portmain from "./assets/images/Portmain.jpg"
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
      <HashRouter>
          {/* HEADER */}
          <div className='headcontainer'>
            <h1>Related Company</h1> <br /> <hr /> <br />
          {/* BARRA DE NAVEGACIÓN DINAMICA */}
            <nav className='mainnavcontainer'>
              {/* <Link to={"/"}><li><b>Home</b></li></Link> */}
              <Link to={"/About"}> <li><b>About</b></li></Link>
              {/* <Link to={"/Projects"}><li><b>Projects</b></li></Link> */}
              {/* <Link to={"/Technologies"}><li><b>Technologies</b></li></Link> */}
              {/* <Link to={"/Teams"}><li><b>Teams</b></li></Link> */}
            </nav>
          </div>

          <div className='maincontainer'>
            <Routes>
                {/* HOME */}
                <Route path='/' element={<Home/>}/>
                {/* ABOUT */}
                <Route path='/About' element={<About/>}/>
                {/* PROJECTS */}
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Projects/:list' element={<ProjectsList/>}/>
                <Route path='/Projects/:detail' element={<ProjectDetail/>}/>
                {/* TECHNOLOGIES */}
                <Route path='/Technologies' element={<Technologies/>}/>
                <Route path='/Technologies/:detail' element={<TechnologiesDetail/>}/>
                {/* TEAMS */}
                <Route path='/Teams' element={<Teams/>}/>
                <Route path='/Teams/:group' element={<TeamGroups/>}/>
            </Routes>
          </div>
      </HashRouter>
  )
}

export default App
