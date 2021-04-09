import * as GiIcons   from "react-icons/gi";
import * as MdIcons   from "react-icons/md";
import * as BiIcons   from "react-icons/bi";


export const inputData = [
    {
        title: "Nombre",
        placeholder: "Nombre del equipo",
        icon : <GiIcons.GiWifiRouter />,
        id:  "idEquipo"
    },
    {
        title: "Marca",
        placeholder: "Marca del equipo",
        icon : <MdIcons.MdBorderColor />,
        id:  "idMarca"
    },
    {
        title: "Modelo",
        placeholder: "Modelo del equipo",
        icon : <MdIcons.MdBorderColor />,
        id:  "idModelo"
    },
    {
        title: "Serie",
        placeholder: "No. de serie",
        icon : <BiIcons.BiBarcodeReader />,
        id:  "idSerie"
    }
];