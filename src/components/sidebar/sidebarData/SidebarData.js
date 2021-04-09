import * as FaIcons   from "react-icons/fa";
import * as AiIcons   from "react-icons/ai";
import * as ImIcons   from "react-icons/im";
import * as BiIcons   from "react-icons/bi";



export const itemSidebar = 
[
    {
        id   : 'menuBar',
        path : '',
        icon : <FaIcons.FaBars/>,
        title: 'Ocultar sidebar'
    },
    {   id   : 'home',  
        path : '/',
        title: 'Home',
        icon :  <FaIcons.FaHome/>
    },
    {   id   : 'buscar',
        path : '/buscar',
        title: 'Buscar equipo',
        icon :  <FaIcons.FaSearch/>
    },
    {   id   : 'registrar',
        path : '/registrar',
        title: 'Registrar equipos',
        icon :  <BiIcons.BiBarcodeReader/>
    },
    {   id   : 'prestamo',
        path : '/prestamo',
        title: 'Préstamo de equipo',
        icon :  <ImIcons.ImDisplay/>
    },
    {   id   : 'entregar',
        path : '/entregar',
        title: 'Entregar equipo',
        icon :  <FaIcons.FaHandHolding/>
    },
    {   id   : 'ubicacion',
        path : '/ubicacion',
        title: 'Ubicación del equipo',
        icon :  <ImIcons.ImLocation/>
    },
    {   id   : 'reparacion',
        path : '/reparacion',
        title: 'Registrar reparación',
        icon :  <FaIcons.FaTools/>
    },
    {   id   : 'configuracion',
        path : '/configuracion',
        title: 'Configuración',
        icon :  <AiIcons.AiFillSetting/>
    }
];