import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import config from '../models/config';

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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {setToolbarOpen(!toolbarOpen)}}
          >
            <MenuIcon />
          </IconButton>
          {
            config.navbar.map((element, index) => {
              if (element.img) {
                return (
                  <IconButton
                    key={index}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label={element.text}
                    style={{paddingRight: "10px"}}
                  >
                    <img
                      src={element.img}
                      alt={element.text}
                    />
                  </IconButton>
                ) 
              } else {
                return (
                  <Button 
                    onClick={() => {window.location.href = element.url;}}
                    key={index}
                    variant="contained" 
                    color="secondary" 
                    style={{color: "#000000", paddingRight: "10px"}}
                  >
                    {element.text}
                  </Button>
                )
              }
            })
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar