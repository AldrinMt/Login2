import './Button.css';


export default function Button(props) {
    return (
        <button className="button-aceptar" onClick={props.execute}>
            <div className="box-icon">
                <span>{props.icon}</span>
            </div>
            <div className="box-title">
                {props.title}            
            </div>
            
        </button>
    )
}
