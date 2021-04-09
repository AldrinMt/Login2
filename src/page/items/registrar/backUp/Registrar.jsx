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
import { QRCode } from 'react-qrcode-logo';


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
                console.log("Verifique los nombres de los ID's");            
        }    
    }

    /* Mostrar Modal - ventana Qr */
    const [showModal,setShowModal] = useState(false);

    const openModal = (e) =>{
        e.preventDefault(); // No actualizar la pág.
        setShowModal(!showModal);
        
    }

    const reload = () =>{

    }

    return (
        <div className="registrar">
            
            <form action="">
                <div className="campos" onKeyUp={mostrarTexto}>
                    {
                        inputData.map( (item,key) =>
                        {
                            return(
                                <div className="textbox" key={key}>
                                    <InpuTextWithIcon 
                                        title={item.title } 
                                        icon ={item.icon  }
                                        id   ={item.id    }
                                    />            
                                </div>
                            )
                        })
                    }
                    <div className="dropdown">
                        <SelectWithIcon />
                    </div>

                    <div className="text-descr">
                        <h2>Características adicionales</h2>
                        <TextAreaDescr />
                    </div>
                    {
                        equipo === "" || marca === "" || modelo === "" || serie === ""
                        ?   <div className="btn-aceptar">
                                <Button title="ACEPTAR" 
                                        icon={<ImIcons.ImQrcode/>}/>
                            </div>
                        :   <div className="btn-aceptar">
                                <Button title = "ACEPTAR" 
                                        icon  = {<ImIcons.ImQrcode/>} 
                                        execute={openModal}
                                        setShowModal = {setShowModal}
                                />
                            </div>
                    }
                    
                    
                </div>
                            
            </form>
            {
               showModal ? <Modal text="modal active" 
                                  equipo={equipo}
                                  marca ={marca }
                                  modelo={modelo}
                                  serie ={serie }
                                  setShowModal={setShowModal} 
                            /> 
                         : <Modal text="modal" 
                                  setShowModal={setShowModal} />
            }            
        </div>
    )
}

const Modal = ( {text, setShowModal, equipo, marca, modelo, serie} ) =>{

    const closeModal = () =>{
        setShowModal(false);
    }

    return(
        <div className={text}>
            <QRCode 
                size  = {185}
                value = {`[Equipo : ${equipo}]\n[Marca  : ${marca}]\n[Modelo: ${modelo}]\n[Serie: ${serie}]`}                   
                enableCORS = {true}                            
                qrStyle    = {'dots'}
                quietZone  = {10 }                            
                fgColor    = {"#1c1d2d"}
                logoImage  = {logo2}
                logoWidth  = {75 }
                logoHeight = {150}
                logoOpacity= {0.4}
            />         
            <div className="btn-cerrar">
                <Button title="REGRESAR" execute={closeModal} icon={<AiIcons.AiOutlineRollback/>}/>
            </div>
        </div> 
    );
}