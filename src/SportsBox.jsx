// //Icons import
// import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import PoolIcon from '@mui/icons-material/Pool';
// import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
// import SportsTennisIcon from '@mui/icons-material/SportsTennis';
// import SportsMmaIcon from '@mui/icons-material/SportsMma';

// //Component import
// import Sport from './Sport'

// //CSS import
// import "./SportsBox.css"

// //Export
// export default function SportsBox() {
//     return (
//     <div className='sport-container'>
//         <Sport
//           IconComponent={DirectionsRunIcon}
//           title="Běh"
//           description={
//             <>
//               500–900 kcal/h
//               <br/>
//               <br/>
//               8 km/h = ~500 kcal/h,
//               <br/>
//               12 km/h = ~800–900 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={DirectionsWalkIcon}
//           title="Chůze"
//           description={
//             <>
//               250–350 kcal/h
//               <br/>
//               <br/>
//               4,5 km/h = ~250 kcal/h,
//               <br/>
//               6 km/h = ~350 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={DirectionsBikeIcon}
//           title="Cyklistika"
//           description={
//             <>
//               400–800 kcal/h
//               <br/>
//               <br/>
//               pomalejší = ~400 kcal/h,
//               <br/>
//               intenzivnější = ~800 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={FitnessCenterIcon}
//           title="Posilování"
//           description={
//             <>
//               300–600 kcal/h
//               <br/>
//               <br/>
//               mírnější = ~300 kcal/h,
//               <br/>
//               intenzivnější = ~500 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={PoolIcon}
//           title="Plavání"
//           description={
//             <>
//               400–700 kcal/h
//               <br/>
//               <br/>
//               pomalejší = ~400 kcal/h,
//               <br/>
//               intenzivnější = ~600 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={RollerSkatingIcon}
//           title="Bruslení"
//           description={
//             <>
//               300-600 kcal/h
//               <br/>
//               <br/>
//               rekreační = ~300 kcal/h,
//               <br/>
//               intenzivnější = ~600 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={SportsTennisIcon}
//           title="Tenis"
//           description={
//             <>
//               500-800 kcal/h
//               <br/>
//               <br/>
//               rekreační = ~500 kcal/h,
//               <br/>
//               intenzivnější = ~800 kcal/h
//             </>
//           }
//         />
//         <Sport
//           IconComponent={SportsMmaIcon}
//           title="Box"
//           description={
//             <>
//               600-900 kcal/h
//               <br/>
//               <br/>
//               mírné = ~600 kcal/h,
//               <br/>
//               intenzivní = ~900 kcal/h
//             </>
//           }
//         />
//     </div>
//     )
// }


import { Carousel } from 'react-bootstrap';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import Sport from './Sport';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SportsBox.css";


export default function SportsBox() {
    return (
        <Carousel className='sport-container'>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={DirectionsRunIcon}
                  title="Běh"
                  description={
                    <>
                      500–900 kcal/h
                      <br/>
                      <br/>
                      8 km/h = ~500 kcal/h,
                      <br/>
                      12 km/h = ~800–900 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={DirectionsWalkIcon}
                  title="Chůze"
                  description={
                    <>
                      250–350 kcal/h
                      <br/>
                      <br/>
                      4,5 km/h = ~250 kcal/h,
                      <br/>
                      6 km/h = ~350 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={DirectionsBikeIcon}
                  title="Cyklistika"
                  description={
                    <>
                      250–650 kcal/h
                      <br/>
                      <br/>
                      pomalejší = ~250 kcal/h,
                      <br/>
                      intenzivnější = ~650 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={FitnessCenterIcon}
                  title="Posilování"
                  description={
                    <>
                      300–600 kcal/h
                      <br/>
                      <br/>
                      mírnější = ~300 kcal/h,
                      <br/>
                      intenzivnější = ~500 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={PoolIcon}
                  title="Plavání"
                  description={
                    <>
                      400–700 kcal/h
                      <br/>
                      <br/>
                      pomalejší = ~400 kcal/h,
                      <br/>
                      intenzivnější = ~600 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={RollerSkatingIcon}
                  title="Bruslení"
                  description={
                    <>
                      300-600 kcal/h
                      <br/>
                      <br/>
                      rekreační = ~300 kcal/h,
                      <br/>
                      intenzivnější = ~600 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={SportsTennisIcon}
                  title="Tenis"
                  description={
                    <>
                      500-800 kcal/h
                      <br/>
                      <br/>
                      rekreační = ~500 kcal/h,
                      <br/>
                      intenzivnější = ~800 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
            <Carousel.Item className='sport-item'>
                <Sport
                  IconComponent={SportsMmaIcon}
                  title="Box"
                  description={
                    <>
                      600-900 kcal/h
                      <br/>
                      <br/>
                      mírné = ~600 kcal/h,
                      <br/>
                      intenzivní = ~900 kcal/h
                    </>
                  }
                />
            </Carousel.Item>
        </Carousel>
    );
}