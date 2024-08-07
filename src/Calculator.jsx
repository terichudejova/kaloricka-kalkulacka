//Icons import
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

//React & MUI import
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//CSS import
import './Calculator.css';

//Components import
import AgeSelect from './AgeSelect';
import HeightSelect from './HeightSelect';
import WeightSelect from './WeightSelect';


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


//Export funkce
function Calculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(20);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(67);
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
    <div className='calculator-container'>
        <div className='first-row'>
          <div className='gender'>
            <span className={gender === 'male' ? 'active' : ''}>Muž</span>
              <CustomSwitch
                checked={gender === 'female'}
                onChange={(event) => setGender(event.target.checked ? 'female' : 'male')}
                color="primary"
                icon={<MaleIcon className="icon" />}
                checkedIcon={<FemaleIcon className="icon" />}
              />
            <span className={gender === 'female' ? 'active' : ''}>Žena</span>
          </div>
          <div className='age'>
            <AgeSelect age={age} setAge={setAge}/>
          </div>
        </div>
        <div className='second-row'>
          <div className='height'>
            <HeightSelect height={height} setHeight={setHeight}/>
          </div>
          <div className='weight'>
            <WeightSelect weight={weight} setWeight={setWeight}/>
          </div>
        </div>
        <div className='third-row'>
          <div className="calculate">
            <Button
              variant="contained"
              size="large"
              onClick={handleCalculate}
              sx={{
                backgroundColor: '#737f4e', // Zelená barva pozadí
                color: '#fff', // Bílá barva textu
                '&:hover': {
                  backgroundColor: '#737f4e', // Tmavší zelená barva při hoveru
                },
                fontSize: "1.5rem",
                padding: "1rem 2rem",
                margin: "0 0 0 0.5rem",
                letterSpacing: "0.2rem",
                fontFamily: "Raleway"
              }}
            >
              Spočítat
            </Button>
          </div>
          <div className="result">
            {result !== null && <p>Bazální metabolismus: {Math.round(result)}</p>}
          </div>
        </div>
    </div>
  );
}

export default Calculator;
