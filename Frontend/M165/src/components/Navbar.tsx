import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import config from '../models/config';

type props = {
  config: config;
}

const Navbar = ({config} : props) => {

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
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
                  >
                    <img
                      src={element.img}
                      alt={element.text}
                    />
                  </IconButton>
                ) 
              } else {
                return (
                  <Button onClick={() => {window.location.href = element.url;}}>
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