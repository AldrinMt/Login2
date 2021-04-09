import { useState } from "react";
import  './Form.css';
import * as FaIcons   from "react-icons/fa";
import * as BsIcons   from "react-icons/bs";
import * as GiIcons   from "react-icons/gi";
import InpuTextWithIcon from "../../../../components/form/InpuTextWithIcon";
import SelectWithIcon from "../../../../components/form/SelectWithIcon";
import QrScanner from "../../../../components/scanQr/QrScanner";
import Button from "../../../../components/form/Button";


export default function Form(props) {

    const [showScanner, setShowScanner] = useState(false);

    const qrScanner = () =>{
        setShowScanner(!showScanner);
    }
    
    return (        
        <>
        {
          { 
            'alumno-salon'  : <AlumnoSalon qrScanner={qrScanner} 
                                           showQrScanner={showScanner} />,
            'profesor-salon': <PersonalSalon qrScanner={qrScanner} 
                                             showQrScanner={showScanner}/>,
            'asignacion-equipo' : <AsignacionEquipo qrScanner={qrScanner} 
                                                    showQrScanner={showScanner}/>,
            'alumno-laboratorio': <AlumnoLab qrScanner={qrScanner} 
                                             showQrScanner={showScanner}/>,
            'profesor-laboratorio': <PersonalLab qrScanner={qrScanner} 
                                                 showQrScanner={showScanner}/>
                
          }[props.optionForm]    
        }
        </>
    )
}

/* 
    Forms de acuerdo al tipo de préstamo 
*/

function AlumnoSalon(props){
    return(
        <form className="formulario-prestamo">
           <div className={props.showQrScanner ? "scanner-container active" : "scanner-container"}>
                {
                    props.showQrScanner ? 
                        <QrScanner closeScanner={props.qrScanner}/> 
                    : null
                }
            </div>

            <div className="alumno-field fields">
                  <h3>Alumno</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre</span><br/>
                       <InpuTextWithIcon id = "input-nombre"
                                         icon  ={<BsIcons.BsPersonBoundingBox/>} 
                                         title ="Alumno"                                          
                                         scanCode = {props.qrScanner}
                                         cursorPointer = {true}                                         
                        />
                   </div>
                  <div className="boleta">
                       <span className="input-title">Boleta</span>
                       <InpuTextWithIcon icon  ={<FaIcons.FaRegAddressCard/>} 
                                         title ="No. de boleta"                                          
                        />
                  </div>
            </div>

            <div className="equipo-field fields">
                  <h3>Equipo</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre del equipo</span>
                       <InpuTextWithIcon icon ={<GiIcons.GiWifiRouter/>} 
                                         title ="Equipo" 
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                   <div className="serial">
                       <span className="input-title">serial</span>
                       <InpuTextWithIcon icon={<FaIcons.FaBarcode/>} 
                                         title="Serial" 
                        />
                   </div>
                    <div className="fecha">
                       <span className="input-title">Fecha de salida</span>
                       <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>} 
                                         type="date" 
                        />
                   </div>
            </div>

            <div className="ubicacion-field fields">
                <h3>Ubicación destino</h3>
                <div className="edificio">
                   <span className="input-title">Edificio</span>
                   <SelectWithIcon />
                </div>
                <div className="area">
                   <span className="input-title">Área</span>
                   <SelectWithIcon />
                </div>
                <div className="salon">
                   <span className="input-title">Salón</span>
                   <SelectWithIcon />
                </div>
            </div>

            <div className="btn-aceptar">
                <Button title="Aceptar" 
                        icon={<FaIcons.FaCheck />}
                /> 
            </div>
        </form>
    );
}

function AlumnoLab(){
    return(
        <form className="formulario-prestamo ">
            <div className="alumno-field fields">
                  <h3>Alumno</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre</span>
                       <InpuTextWithIcon icon  ={<BsIcons.BsPersonBoundingBox/>} 
                                         title ="Alumno"                                          
                                         scanCode = {null}
                                         cursorPointer = {true}                                         
                        />
                   </div>
                  <div className="boleta">
                       <span className="input-title">Boleta</span>
                       <InpuTextWithIcon icon={<FaIcons.FaRegAddressCard/>} 
                                         title="No. de boleta" 
                        />
                  </div>
            </div>

            <div className="equipo-field fields">
                  <h3>Equipo</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre del equipo</span>
                       <InpuTextWithIcon icon={<GiIcons.GiWifiRouter/>}
                                         title="Equipo" 
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                   <div className="serial">
                       <span className="input-title">serial</span>
                       <InpuTextWithIcon icon={<FaIcons.FaBarcode/>}
                                         title="Serial"
                        />
                   </div>
                    <div className="fecha">
                       <span className="input-title">Fecha de salida</span>
                       <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>}
                                         type="date"
                        />
                   </div>
            </div>

            <div className="ubicacion-field fields">
                  <h3>Ubicación destino</h3>
                  <div className="edificio">
                       <span className="input-title">Edificio</span>
                       <SelectWithIcon />
                   </div>
                   <div className="area">
                       <span className="input-title">Área</span>
                       <SelectWithIcon />
                   </div>
                    <div className="salon">
                       <span className="input-title">Salón</span>
                       <SelectWithIcon />
                   </div>
            </div>

            <div className="btn-aceptar">
                <Button title="Aceptar" icon={<FaIcons.FaCheck />}/> 
            </div>
        </form>
    );
}

function PersonalSalon(){
    return(
        <form className="formulario-prestamo">
            <div className="personal-field fields">
                  <h3>Personal</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre</span>
                       <InpuTextWithIcon icon={<BsIcons.BsPersonBoundingBox/>} 
                                         title="Nombre completo"
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                  <div className="ipn">
                       <span className="input-title">IPN</span>
                       <InpuTextWithIcon icon={<FaIcons.FaUserAlt />} title="IPN" />
                  </div>
            </div>

            <div className="equipo-field fields">
                  <h3>Equipo</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre del equipo</span>
                       <InpuTextWithIcon icon={<GiIcons.GiWifiRouter/>} 
                                         title="Equipo" 
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                   <div className="serial">
                       <span className="input-title">serial</span>
                       <InpuTextWithIcon icon={<FaIcons.FaBarcode/>}    title="Serial" />
                   </div>
                    <div className="fecha">
                       <span className="input-title">Fecha de salida</span>
                       <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>} type="date" />
                   </div>
            </div>

            <div className="ubicacion-field fields">
                  <h3>Ubicación destino</h3>
                  <div className="edificio">
                       <span className="input-title">Edificio</span>
                       <SelectWithIcon />
                   </div>
                   <div className="area">
                       <span className="input-title">Área</span>
                       <SelectWithIcon />
                   </div>
                    <div className="salon">
                       <span className="input-title">Salón</span>
                       <SelectWithIcon />
                   </div>
            </div>

            <div className="btn-aceptar">
                <Button title="Aceptar" icon={<FaIcons.FaCheck />}/> 
            </div>
        </form>
    );
}

function PersonalLab(){
    return(
        <form className="formulario-prestamo">
            <div className="personal field fields">
                  <h3>Personal</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre</span>
                       <InpuTextWithIcon icon={<BsIcons.BsPersonBoundingBox/>} 
                                         title="Nombre completo"
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                  <div className="ipn">
                       <span className="input-title">IPN</span>
                       <InpuTextWithIcon icon={<FaIcons.FaUserAlt />} title="IPN" />
                  </div>
            </div>

            <div className="equipo field fields">
                  <h3>Equipo</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre del equipo</span>
                       <InpuTextWithIcon icon={<GiIcons.GiWifiRouter/>} 
                                         title="Equipo" 
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                   <div className="serial">
                       <span className="input-title">serial</span>
                       <InpuTextWithIcon icon={<FaIcons.FaBarcode/>} title="Serial"/>
                   </div>
                    <div className="fecha">
                       <span className="input-title">Fecha de salida</span>
                       <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>} type="date"/>
                   </div>
            </div>

            <div className="btn-aceptar">
                <Button title="Aceptar" icon={<FaIcons.FaCheck />}/> 
            </div>
        </form>
    );
}

function AsignacionEquipo(){
    return(
        <form className="formulario-prestamo">
            <div className="personal-field fields">
                  <h3>Personal</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre</span>
                       <InpuTextWithIcon icon={<BsIcons.BsPersonBoundingBox/>} 
                                         title="Nombre completo"
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                  <div className="ipn">
                       <span className="input-title">IPN</span>
                       <InpuTextWithIcon icon={<FaIcons.FaUserAlt />} title="IPN" />
                  </div>
            </div>

            <div className="equipo-field fields">
                  <h3>Equipo</h3>
                  <div className="nombre">
                       <span className="input-title">Nombre del equipo</span>
                       <InpuTextWithIcon icon={<GiIcons.GiWifiRouter/>} 
                                         title="Equipo" 
                                         scanCode = {null}
                                         cursorPointer = {true}
                        />
                   </div>
                   <div className="serial">
                       <span className="input-title">serial</span>
                       <InpuTextWithIcon icon={<FaIcons.FaBarcode/>}    title="Serial"/>
                   </div>
                    <div className="fecha">
                       <span className="input-title">Fecha de salida</span>
                       <InpuTextWithIcon icon={<FaIcons.FaCalendarDay/>} type="date"/>
                   </div>
            </div>
            
            <div className="ubicacion-field fields">
                  <h3>Ubicación destino</h3>
                  <div className="edificio">
                       <span className="input-title">Edificio</span>
                       <SelectWithIcon />
                   </div>
                   <div className="area">
                       <span className="input-title">Área</span>
                       <SelectWithIcon />
                   </div>
                    <div className="salon">
                       <span className="input-title">Salón</span>
                       <SelectWithIcon />
                   </div>
            </div>

            <div className="btn-aceptar">
                <Button title="Aceptar" icon={<FaIcons.FaCheck />}/> 
            </div>
        </form>
    );
}