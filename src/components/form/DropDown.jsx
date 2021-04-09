import './DropDown.css';

export default function DropDown(props) {
    return (
        <div className="dropDown">
            <select name={props.placeholder} id={props.placeholder}>
                <option value="mouse">Mouse</option>
                <option value="teclado">Teclado</option>
            </select>
            <label htmlFor="">{props.placeholder}</label>
        </div>
    )
}
