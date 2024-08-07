import "./Sport.css"
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Sport() {
    return (
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <DirectionsRunIcon className="sport-icon"/>
                    <h3>Běh</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
    )
}

