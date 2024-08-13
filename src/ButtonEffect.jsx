import "./ButtonEffect.css"

export default function ButtonEffect({href, text}) {
    return (
        <a href={href} class="button">{text}</a>
    )
}
