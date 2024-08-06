import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HeightSelect({height, setHeight}) {

  const handleChange = (event) => {
    setHeight(Number(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="height-select-label"
        sx={{
          fontSize: '1.5rem',
          color: 'black', // Color of the label text
          '&.Mui-focused': {
            color: '#737f4e', // Color when focused
          },
        }}
      >
        Výška (cm)
      </InputLabel>
      <Select
        labelId="height-select-label"
        id="height-select"
        value={height}
        label="Výška (cm)"
        onChange={handleChange}
        sx={{
          fontSize: '1.5rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#737f4e', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#737f4e', // Border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#737f4e', // Border color when focused
          },
          '& .MuiSvgIcon-root': {
            color: '#737f4e', // Color of dropdown arrow
          },
        }}
      >
        {Array.from({ length: 61 }, (_, i) => i + 150).map((value) => (
          <MenuItem key={value} value={value} sx={{ fontSize: '1.5rem' }}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default HeightSelect;
