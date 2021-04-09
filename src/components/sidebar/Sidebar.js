import './Sidebar.css';

import Tooltip from "../tooltip/Tooltip";

import { Link        } from "react-router-dom";
import { itemSidebar } from "./sidebarData/SidebarData";
import { useEffect   } from "react";

export default function Sidebar(props){

    
    useEffect(() => {
        let tag_li = document.querySelectorAll('.box-icon')
        
        const setBackground_li = (e) =>{
            tag_li.forEach( li =>{
                if( e.currentTarget.id === li.id ){
                    e.currentTarget.setAttribute("style","background: #1e4164");
                    // ícono blanco al presionar el tag li
                    e.currentTarget.querySelector('a').setAttribute("style", "color: #e1e3e4");
                    console.log("[ACTUAL]" + e.currentTarget.id)
                }
                else{
                    li.style.background = "";
                    console.log("-> " + li.id + " -a- " + li.childNodes[0] )
                    li.childNodes[0].style.color = ""                
                }
            });
        }

        tag_li.forEach( li =>{
            li.addEventListener('click',setBackground_li)
        });
        
        console.log("Se montoooo")
        
        return () =>{
            tag_li.forEach( li =>{
                li.removeEventListener('click', setBackground_li);
            })
            console.log("Se desmontoooo")
        }
    },[])

    return(        
        <nav className={props.booleanState ? 'sidebar active' : 'sidebar'}
             onClick={props.hideSidebar}>
            <ul>
            {
                itemSidebar.map((item,index) =>{
                    return(                                    
                        <li key={index} id={item.id} className="box-icon">
                            <Link to={item.path}>
                                <span className='icons'>
                                    {item.icon}
                                </span>
                            </Link>
                            {/* Sólo funciona en Computadoras -> "hover" */} 
                            <Tooltip title={item.title} tooltip={'boxTooltip'}/>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
                  
    );
}