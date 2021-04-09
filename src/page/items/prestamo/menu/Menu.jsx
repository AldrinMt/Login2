import './Menu.css';
import { Link } from "react-router-dom";
import { datosMenu } from "./dataMenu";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";


export default function Menu() {
    /*
        Efectos animados al menú
    */
    useEffect(() => {
         let li_options = document.querySelectorAll('.box-prestamo');

         li_options.forEach( li =>{
            li.addEventListener('click', event =>{
                
                let tagNodes = event.currentTarget.childNodes;
                
                li_options.forEach(li_item =>{

                    if (event.currentTarget.id === li_item.id){ 
                        tagNodes[0].style.color = "#FF6347";                                               
                        tagNodes[1].style.background = "#FF6347";
                        tagNodes[1].style.left = "-100%";
                        tagNodes[1].style.transform = "translateX(100%)";
                        
                    }
                    else{
                        li_item.childNodes[0].style.color =  "";
                        li_item.childNodes[1].style.background = "";
                        li_item.childNodes[1].style.transform = "translateX(0)";
                    }
                });

            });

         });

    }, [])

    // Obtener ruta actual de la página - retorno un objeto {}
    let {url} = useRouteMatch();

    // Menú de opciones del módulo 'préstamo'
    return (
        <nav className="menu">
            <ul>
                {
                    datosMenu.map( (item,index) =>{
                        return(
                            <li key={index} 
                                id={item.id} 
                                className="box-prestamo">
                                
                                <Link to={`${url}${item.path}`}>
                                    {item.title}
                                </Link>
                                <div className="bar-line"></div>
                            </li>
                        )
                    })
                    
                }
            </ul>            
        </nav>
    )
}
