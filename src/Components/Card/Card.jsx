import './Card.css'

const Card = ({children}) => {
    return (
        <div className="card fixed">
            <div className="card-content">{children}</div>
        </div>
    )
}

export default Card
