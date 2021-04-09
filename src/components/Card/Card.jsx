import "./Card.css";


 const Card = (props) =>{
    return(
        <div className="card">
            <div className="icon">
                <span>{props.icon}</span>
            </div>
            <div className="title">
                <span>{props.title}</span>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Card;
