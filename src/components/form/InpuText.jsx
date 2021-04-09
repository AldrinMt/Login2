import './InpuText.css';

export default function InpuText(props) {
    return (
        <div  className={props.typeInput==="date" ? "inpuText date" 
                                                  : "inpuText"} >
            <input type={props.typeInput} required />
            <label htmlFor="">{props.placeholder}</label>            
        </div>
    )
}
