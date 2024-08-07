import "./Card.css"

export default function Card({src, title, text}) {
    return (
        <div id="card">
            <img src={src} alt=""/>
            <div className="card-content">
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
