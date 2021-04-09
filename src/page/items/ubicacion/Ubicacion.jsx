import './Ubicacion.css'
import * as ImIcons   from "react-icons/im";



export default function Ubicacion() {
    return (
        <div className="ubicacion">
            
            <div className="opciones">
                <div className="search-box">
                    <SearchField />                    
                </div>
                <div className="check-container">
                    <div>
                        <input type="checkbox" name="showAllDevices" id="showAllDevices"/>
                        <label htmlFor="showAllDevices">Mostrar todos los equipos</label>
                    </div>                    
                </div>                
            </div>

            <div className="resultado">

            </div>
        </div>
    )
}

const SearchField = () =>{
    return(
        <div className="buscador-ubicacion">
            <input type="text" name="search-location" id="search-location" placeholder="Especificación del equipo"/>
            <div className="box-icon">
                <span><ImIcons.ImSearch/></span>
            </div>
        </div>
    );
}


