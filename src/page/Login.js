import react, {Component} from 'react';
import 'almacen-equipos-master\src\page\Login.css';
class Login extends Component{
    state={
        form:{
            username: '',
            password: ''
        }
    }
    //Capturar informacion de los input
    handleChande=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    render(){
        return(
            <div className="containerPrincipal">
                <div className = "containerSecundario">
                    <div className = "form-group">
                        <label>Usuario: </label>
                        <br />
                        <input type = "text" className = "form-control" name = "username" onChange= {this.handleChande} />
                        <br />
                        <label>Contraseña</label>
                        <br />
                        <input type = "password" className = "form-control" name = "password" onChange= {this.handleChande}/>
                        <br />
                        <button className = "btn btn-primary">Iniciar sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;