import React, { useState } from 'react';
import * as ImIcons   from "react-icons/im";
import * as AiIcons   from "react-icons/ai";

import "./Registrar.css";
import logo2 from "./logo/logo2.png";

import InpuTextWithIcon from '../../../components/form/InpuTextWithIcon';
import SelectWithIcon from '../../../components/form/SelectWithIcon';
import TextAreaDescr from '../../../components/form/TextAreaDescr';
import Button from '../../../components/form/Button';
import {inputData} from "../../../components/form/InpuTextWithData";
import { QRCode  } from 'react-qrcode-logo';


export default function Registrar() {

    /* Recolectar valores de los inputs para el QR */
    const [equipo, setEquipo] = useState("");
    const [marca , setMarca ] = useState("");
    const [modelo, setModelo] = useState("");
    const [serie , setSerie ] = useState("");
    

    const mostrarTexto = (event) =>{
        
        switch(event.target.id){
            case "idEquipo":
                setEquipo(event.target.value);
                break;
            case "idMarca":
                setMarca(event.target.value);
                break;
            case "idModelo":
                setModelo(event.target.value);
                break;
            case "idSerie":
                setSerie(event.target.value);
                break;
            default:
               return;            
        }    
    }

    /* Mostrar Modal - ventana Qr */
    const [showModal  ,setShowModal  ] = useState(false);
    const [currentSize,setCurrentSize] = useState(0);
    const [qrOptions  , setQrOptions ] = useState( {
        logo   : true,
        cuadros: false,
    } );

    const openQrCode = (e) =>{
        e.preventDefault(); // No actualizar la pág.
        setShowModal(!showModal);
        setCurrentSize(window.innerWidth);        
    }

    /* Mosrtar ventana de aviso */
    const emptyFields = () =>{
        window.alert("Termine los campos faltantes")
    }
    /*  Opciones de diseño Qr */
    const QrOptions = (e) =>{

        setQrOptions(
            {
                logo  : !document.getElementById('check-qr1').checked,
                cuadros: document.getElementById('check-qr2').checked
            }
        );
    }

    return (
        <div className="registrar">
            {/* Caja 1 */}
            <form action="" onKeyUp={mostrarTexto}>                
                {
                    inputData.map( (item,key) =>
                    {
                    return(
                        <div className="textbox" key={key}>
                            <span className="input-title">{item.title}</span>
                            <InpuTextWithIcon 
                                cursorPointer = {item.id==="idSerie" ? true : false}
                                scanCode   = {item.id==="idSerie" ? null : null }
                                type ={"text"}
                                title={item.placeholder } 
                                icon ={item.icon  }
                                id   ={item.id    }
                            />            
                        </div>
                    )
                    })
                }
                
                <div className="dropdown">
                    <span className="input-title">Estado del equipo</span>
                    <SelectWithIcon />
                </div>

                <div className="text-descr">
                    <h2>Características adicionales</h2>
                    <TextAreaDescr />
                </div>
                <div className="btn-registrar">
                    <Button 
                        title = "REGISTRAR" 
                        icon  = {<ImIcons.ImQrcode/>}
                        execute = { equipo === "" || marca === "" || modelo === ""|| serie === "" ? emptyFields :openQrCode}                                 
                        setShowModal = {setShowModal}
                    />
                </div>
                                    
            </form>

            {/* Caja 2 */} 
            <div className={ showModal && currentSize <= 1000 ? "container-qr active" : "container-qr" }>
                <div className={ equipo === "" || marca === "" || modelo === ""|| serie === "" ? "marco-qr" : "marco-qr active"} >
                    <QRCode 
                        size  = {185}
                        value = {`[Equipo : ${equipo}]\n[Marca  : ${marca}]\n[Modelo: ${modelo}]\n[Serie: ${serie}]`}                   
                        enableCORS = {true}                            
                        qrStyle    = { qrOptions.cuadros ? 'squares' : 'dots'}
                        quietZone  = {10 }                            
                        fgColor    = {"#1c1d2d"}
                        logoImage  = { qrOptions.logo ? logo2 :  null }
                        logoWidth  = {75 }
                        logoHeight = {150}
                        logoOpacity= {0.4}
                    />
                </div>   

                <form>
                    <div className="title">
                        <span>Diseño del Qr</span>
                    </div>
                    <div className="marco-options">
                         <div className="qr-options">
                             <input type="checkbox" name="check-qr" id="check-qr1" onClick={QrOptions}/>
                             <label htmlFor="check-qr1">Sin logo IPN</label>
                         </div>
                         <div className="qr-options">
                             <input type="checkbox" name="check-qr" id="check-qr2" onClick={QrOptions}/>
                             <label htmlFor="check-qr2">Cuadros (Qr clásico) </label>
                         </div>    
                    </div>                                                  
                </form> 
                
                <div className="btn-cerrar">
                    <Button 
                    title = "CERRAR" 
                    icon  = {<AiIcons.AiOutlineBlock/>}
                    execute = {openQrCode}                                 
                    setShowModal = {setShowModal}
                    />
                </div>   
            </div>
          
        </div>
    )
}
