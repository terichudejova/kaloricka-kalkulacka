import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AgeSelect({age, setAge}) {
  const handleChange = (event) => {
    setAge(Number(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="age-select-label"
        sx={{
          fontSize: '1.5rem',
          color: 'black', // Color of the label text
          '&.Mui-focused': {
            color: '#737f4e', // Color when focused
          },
        }}
      >
        Věk
      </InputLabel>
      <Select
        labelId="age-select-label"
        id="age-select"
        value={age}
        label="Věk"
        onChange={handleChange}
        sx={{
            fontSize: '1.5rem',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#737f4e', // default border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#737f4e', // border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#737f4e', // border color when focused
            },
            '& .MuiSvgIcon-root': {
              color: '#737f4e', // color of dropdown arrow
            },
          }}
      >
        {Array.from({ length: 91 }, (_, i) => i + 10).map((value) => (
          <MenuItem key={value} value={value} sx={{ fontSize: '1.5rem' }}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default AgeSelect;
