import './Page.css';
import Buscar from "./items/buscar/Buscar";
import Prestamo from "./items/prestamo/Prestamo";
import Entregar from "./items/entregar/Entregar";
import Ubicacion from "./items/ubicacion/Ubicacion";
import Registrar  from "./items/registrar/Registrar";
import Reparacion  from "./items/reparacion/Reparacion";
import Configuracion from "./items/configuracion/Configuracion";


import { useParams } from "react-router-dom";

export default function Page() {

    let id = useParams();


    return (
        <div className="page-container">
            {            
                {   
                    'buscar'   :    <Buscar   />,
                    'prestamo' :    <Prestamo />,
                    'entregar' :    <Entregar />,
                    'ubicacion':    <Ubicacion />,
                    'registrar':    <Registrar />,        
                    'reparacion':   <Reparacion /> ,
                    'configuracion':<Configuracion />                                         
                }[id.idPage]
                
            }
            
        </div>
    );
}
