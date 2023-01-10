import { AppBar, Toolbar } from '@mui/material';
import config from '../models/config';
import DynamicIconButton from './atoms/DynamicIconButton';

type props = {
  config: config;
  toolbarOpen : boolean;
  setToolbarOpen : (toolbarOpen : boolean) => void; 
}

const Navbar = ({config, toolbarOpen, setToolbarOpen} : props) => {
  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <DynamicIconButton onClick={() => {setToolbarOpen(!toolbarOpen)
          console.log(toolbarOpen);
          }} icon="Menu" />
          {config.navbar.map((item, index) => {
          return (
            <DynamicIconButton key={index} imgAltText={item.text} imgSrc={item.img} />
          )
        })}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar