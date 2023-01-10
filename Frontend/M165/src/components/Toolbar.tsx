import { Box, Drawer } from '@mui/material'
import React from 'react'
import config from '../models/config';
import DynamicIconButton from './atoms/DynamicIconButton';
import { useNavigate } from "react-router-dom";
import DynamicToolbarButton from './atoms/DynamicToolbarButton';

type props = {
  toolbarOpen: boolean;
  setToolbarOpen: (toolbarOpen: boolean) => void;
  config: config;
}

const Toolbar = ({ toolbarOpen, setToolbarOpen, config }: props) => {
  // const navigate = useNavigate()
  return (
    <>
      <Drawer
        anchor={"left"}
        open={toolbarOpen}
        onClose={() => { setToolbarOpen(false) }}

      >
        <Box
          sx={{
            width: 250
          }}>
          {config.toolbar.map((item, index) => {
            return (
              <DynamicToolbarButton key={index} href={item.url} text={item.text} onClick={() => { }} />
            )
          })}
        </Box>
      </Drawer>
    </>
  )
}

export default Toolbar