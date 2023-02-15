import { Box, InputAdornment, TextField } from '@mui/material'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import React from 'react'

export const SearchCustome = () => {
  return (
    <Box>
        <TextField id="outlined-basic" label="Buscador" variant="outlined" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ScreenSearchDesktopIcon />
            </InputAdornment>
          ),
        }}/>
    </Box>
  )
}
