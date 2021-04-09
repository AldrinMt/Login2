import './Entregar.css'
import { useState } from "react";
import Button  from "../../../components/form/Button";
import InpuTextWithIcon from "../../../components/form/InpuTextWithIcon";

import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";



export default function Entregar() {

    const [showInfoQr, setShowInfoQr] = useState(false);

    const showInfoWindowQr = () =>{
        setShowInfoQr(preps => !preps)
        console.log(showInfoQr)
    }

    return (
        <div className="entregar">
            
            <div className="btn-escanear">
                <Button title= "Escanear" 
                        icon = {<ImIcons.ImQrcode/>}
                        execute = {showInfoWindowQr}
                />
            </div>

            <form action="" className={showInfoQr ? "active" : null }>
                {/*
                <div className="box-img">
                    <img src={Book} alt="book"/>
                </div>
                */}                

                <h1>Código Qr</h1>
                

                <div className="input-box">
                    <span className="input-title">Nombre completo</span>                    
                    <InpuTextWithIcon icon={<FaIcons.FaUserAlt    /> }  type="text"/>
                </div>

                <div className="input-box">
                    <span className="input-title">Equipo prestado</span>
                    <InpuTextWithIcon icon={<GiIcons.GiWifiRouter /> }  type="text"/>    
                </div>

                <div className="input-box">
                    <span className="input-title">No. serie</span>
                    <InpuTextWithIcon icon={<FaIcons.FaBarcode    /> }  type="text"/>
                </div>
                
                <div className="input-box">
                    <span className="input-title">Fecha de salida</span>
                    <InpuTextWithIcon icon={<FaIcons.FaCalendar   /> }  type="date"/>    
                </div>

                <div className="input-box">
                    <span className="input-title">Fecha de entrega</span>
                     <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>}  type="date"/>    
                </div>
                
                <div className="myBtn-entregar">
                    <Button title= "Entregar" 
                            icon = {<FaIcons.FaHandHolding/>}                            
                    />
                </div>
            </form>
        
        </div>
    )
}
