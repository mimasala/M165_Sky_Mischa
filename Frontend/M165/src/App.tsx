import { Toolbar } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import { getConfigJson } from './service/ConfigHandler'


function App() {
  const [content, setContent] = useState({})
  const getContent = async () => {
    await getConfigJson("home").then((response) => {
      setContent(response)
    })
  }
  return (
    <div className="App">
      <Navbar title={'alksdjfk  '} buttons={[]} sites={[]} />
    </div>
  )
}

export default App
