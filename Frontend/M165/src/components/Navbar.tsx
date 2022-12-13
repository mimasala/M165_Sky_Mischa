import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material'
import React from 'react'

interface button{
  name: string
  href: string
}

interface props {
  title: string
  buttons: any[]
  sites: string[]
}

const Navbar = ({title,buttons,sites}:props) => {
  
  return (
    <div>
        <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          {buttons.map((button:button) => (
            <Button key={button.name
            } color="inherit" href={
              button.href
            }>
              {button.name}
            </Button>
          ))}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {sites.map((site:string) => (
              <IconButton
                key={site}
                size="large"
                edge="start"
                color="inherit"
                aria-label={site}
                sx={{ ml: 2 }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${site}`}
                  alt={site}
                />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Navbar