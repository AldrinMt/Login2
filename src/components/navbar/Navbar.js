import "./Navbar.css";
import * as FaIcons   from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = (props) =>{

    let location = useLocation();

    return(
        <div className='navbar-menu'>
            <div className={'boxBar'} 
                 onClick  ={props.showSidebar}>                
                 
                <span><FaIcons.FaBars/></span>
            </div>
            
            <div className="schoolName">
                <span>                    
                    {   // Corregir algunas palabras - tildes
                        {          
                            '/': "cecyt 16",                                    
                            '/buscar': "buscar",                                      
                            '/prestamo': "préstamo",
                            '/entregar': "entregar",
                            '/registrar': "registrar",
                            '/ubicacion': "ubicación",
                            '/reparacion': "reparación",
                            '/configuracion': "configuración"
                        }[location.pathname]
                    }
                </span>
            </div>
        </div>
    );
}

export default Navbar;