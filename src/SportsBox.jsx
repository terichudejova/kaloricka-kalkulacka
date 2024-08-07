//Icons import
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsMmaIcon from '@mui/icons-material/SportsMma';

//Component import
import Sport from './Sport'

//CSS import
import "./SportsBox.css"

//Export
export default function SportsBox() {
    return (
    <div className='sport-container'>
        <Sport
          IconComponent={DirectionsRunIcon}
          title="Běh"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={DirectionsWalkIcon}
          title="Chůze"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={DirectionsBikeIcon}
          title="Cyklistika"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={FitnessCenterIcon}
          title="Posilování"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={PoolIcon}
          title="Plavání"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={RollerSkatingIcon}
          title="Bruslení"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={SportsTennisIcon}
          title="Tenis"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
        <Sport
          IconComponent={SportsMmaIcon}
          title="Box"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."
        />
    </div>
    )
}