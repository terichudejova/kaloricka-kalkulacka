import "./Card.css"
import SearchIcon from '@mui/icons-material/Search';


export default function Card({src, title, text}) {
    return (
        <div id="card">
            <img src={src} alt=""/>
            <div className="card-content">
                <h2>
                    {title}
                    <SearchIcon
                        sx={{fontSize: "2.5rem"}}
                    />
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
