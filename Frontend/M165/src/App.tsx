import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import config from './models/config';

function App() {
  const [config, setConfig] = useState<config>(); 
  const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('./modules.cfg.json')
      .then(res => {return res.json()})
      .then((res) => {
        console.log(res);
        setConfig(res);
      })
      .catch(console.log);
  }, []);
  
  if (!config) {
    return (<div className="App"></div>)
  }

  return (
    <div className="App">
      <Navbar 
        config={config} 
        toolbarOpen={toolbarOpen} 
        setToolbarOpen={setToolbarOpen}
      />
    </div>
  )
}

export default App
