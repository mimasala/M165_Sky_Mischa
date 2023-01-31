
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OsuModule from './components/modules/osu';
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
      <Router>
        <Routes>
          <Route path="/" element={<StartPage config={config}/>} />
          {
            config.modules.map((elem) => {
              return <Route path={elem.name} element={<OsuModule config={config} />} />
            })
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
