import './TextAreaDescr.css'

export default function TextAreaDescr() {
    return (
        <div className="text-area">
            <textarea   id   = "text-description" 
                        name = "text-description"                     
                        cols = "40" 
                        rows = "5"
                        placeholder="Descripción del quipo; en caso de contar con componentes extras o internos.">
            </textarea>
        </div>
    )
}
