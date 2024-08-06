// Kalkulacka.jsx
import React, { useState } from 'react';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import './Calculator.css';

// Custom switch styled component
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 100,
  height: 40,
  padding: 10,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(55px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ECFFA1',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#fff',
    '& .female-icon, & .male-icon': {
      fontSize: '20px',
      color: '#000',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#b5bd98',
    borderRadius: 20 / 2,
  },
}));

function Calculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(20);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let calculatedResult;
    if (gender === 'male') {
      calculatedResult = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      calculatedResult = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    setResult(calculatedResult);
  };

  return (
    <div className="kalkulacka-container">
      {/* First Row */}
      <div className="row">
        <div className="column">
          <CustomSwitch
            checked={gender === 'female'}
            onChange={(event) => setGender(event.target.checked ? 'female' : 'male')}
            color="primary"
            icon={<MaleIcon className="icon" />}
            checkedIcon={<FemaleIcon className="icon" />}
          />
        </div>
        <div className="column">
          <div className="text">
            <span className={gender === 'male' ? 'active' : ''}>Muž</span>
            <span className={gender === 'female' ? 'active' : ''}>Žena</span>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="column">
          <label>
            Věk (roky):
            <select value={age} onChange={(e) => setAge(parseInt(e.target.value))}>
              {Array.from({ length: 91 }, (_, i) => i + 10).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="column">
          <label>
            Výška (cm):
            <select value={height} onChange={(e) => setHeight(parseInt(e.target.value))}>
              {Array.from({ length: 81 }, (_, i) => i + 130).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Third Row */}
      <div className="row">
        <div className="column">
          <label>
            Váha (kg):
            <select value={weight} onChange={(e) => setWeight(parseInt(e.target.value))}>
              {Array.from({ length: 171 }, (_, i) => i + 30).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="column">
          <button onClick={handleCalculate}>Spočítat</button>
        </div>
        <div className="column">
          {result !== null && <p>Výsledek: {result.toFixed(2)}</p>}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
