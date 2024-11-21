import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav} from 'react-bootstrap'
import COCO from './components/coco/COCO'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Last } from 'react-bootstrap/esm/PageItem'
import Shesh from './components/shesh/Shesh'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <COCO/>
     <Banner/>
     <About/>
     <Contact/>
    <Shesh/>
    </>
  )
}

export default App
