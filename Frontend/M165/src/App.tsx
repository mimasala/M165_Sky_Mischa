import { useEffect, useState } from 'react';
import StartPage from './components/pages/StartPage';
import config from './models/config';

function App() {
  const [config, setConfig] = useState<config>(); 

  // Loads the config file in the '/public' folder
  useEffect(() => {
    fetch('./modules.cfg.json')
      .then(res => {return res.json()})
      .then((res) => {
        setConfig(res);
      })
      .catch(console.log);
  }, []);
  
  if (!config) {
    return (<div className="App"></div>)
  }

  return (
    <div className="App">
      <StartPage config={config}/>
    </div>
  )
}

export default App
