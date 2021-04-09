import './Prestamo.css';

import Form  from "./form/Form";
import Card  from "../../../components/Card/Card";

import * as BsIcons  from "react-icons/bs";
import * as GiIcons  from "react-icons/gi";
import * as SiIcons  from "react-icons/si";

import { useState } from "react";

export default function Prestamo() {

    const [goToForm, setGoToForm] = useState("");
    const [animationForm, setAnimationForm] = useState(false);

    const setForm = (event) =>{
        
        if (event.currentTarget.id === "alumno-salon"){
            setGoToForm("alumno-salon");
        }
        else if (event.currentTarget.id === "alumno-lab"){
            setGoToForm("alumno-laboratorio");
        }
        else if (event.currentTarget.id === "profesor-salon"){
            setGoToForm("profesor-salon");
        }
        else if (event.currentTarget.id === "profesor-lab"){
            setGoToForm("profesor-laboratorio");
        }
        else{
            setGoToForm("asignacion-equipo");
        }

        setAnimationForm(!animationForm)
        console.log(event.currentTarget.id);
    }

    // El módulo 'préstamo '
    return (
        <div className="prestamo">
                <div className={animationForm ? "user-form active" : "user-form"}>
                <Form optionForm={goToForm} />
            </div>
            <div className="card-options">
                <div className="card-num1" id="alumno-salon" onClick={ setForm }  >
                    <Card title="ALUMNOS" 
                          text="Préstamo de equipo para alumnos."
                          icon={<SiIcons.SiGoogleclassroom/>}                          
                          
                    />
                </div>
                <div className="card-num1" id="profesor-salon" onClick={ setForm }>
                    <Card title="PROFESOR" 
                          text="Préstamo de equipos para profesores."
                          icon={<GiIcons.GiTeacher/>}                          
                    />
                </div>
                <div className="card-num1" id="alumno-lab" onClick={ setForm }>
                    <Card title="ALUMNOS" 
                          text="Préstamo de equipo para alumnos en laboratorio"
                          icon={<SiIcons.SiGoogleclassroom/>}                          
                    />
                </div>
                <div className="card-num1" id="profesor-lab" onClick={ setForm }>
                    <Card title="PROFESOR" 
                          text="Préstamo de equipo para profesores en laboratorio"
                          icon={<GiIcons.GiTeacher/>}                          
                    />
                </div>
                <div className="card-num1" id="asignacion-equipo" onClick={ setForm }>
                    <Card title="ASIGNACIÓN" 
                        text="Asignación de equipo al personal IPN."
                        icon={<BsIcons.BsPersonSquare/>}                          
                    />
                </div>
            </div>


        </div>
    )
}

