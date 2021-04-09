import './SelectWithIcon.css';
import * as GoIcons   from "react-icons/go";

export default function SelectWithIcon() {
    return (
        <div className="selectWithIcon">
            
            <select name="status-equipo" id="status-equipo" >
                <option value="disponible">Disponible</option>
                <option value="prestado">Prestado</option>
                <option value="inservible">Inservible</option>
            </select>

            <span className="icon">
                <GoIcons.GoChecklist />
            </span>

        </div>
    )
}
