import "./Sport.css"


export default function Sport({ IconComponent, title, description }) {
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    {IconComponent && <IconComponent className="sport-icon" />}
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
