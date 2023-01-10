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
          <DynamicIconButton onClick={() => {setToolbarOpen(!toolbarOpen)}} icon="Menu" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar