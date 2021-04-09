import React, {useState} from 'react';
import './Login2.css';
import Title from './LoginComponets/Title/Title';
import Label from './LoginComponets/Label/label';
import Input from './LoginComponets/Input/Input';
const Login2 = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]= useState('');
    const [passwordError, setPasswordError]=useState(false);

    const[isLogin, setIsLoging]=useState(false);
    const[hasError,setHasError]=useState(false);
    function handleChange(name, value) {
        if(name === 'usuario'){
            setUser(value)
        }else{
            if(value.length < 6){
                setPasswordError(true);
            }else{
                setPasswordError(false)
                setPassword(value)
            }
        }
    };
    function ifMatch(param) {
        //verificar parametros vacios
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'aldrin' && param.password === '1234567'){
                const {user, password}=param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLoging(true);
            }else{
                setIsLoging(false);
                setHasError(true);
            }
        }else{
            setIsLoging(false);
            setHasError(true);
        }
    }
//guardar datos de los usuarios
    function handleSubmit() {
        let account = {user, password}
        if(account){
            ifMatch(account);
        }
    };
    return(
        <div className = 'login-container'>
            <div className = 'login-content'>
                <Title text = 'LOGIN'/>
                {hasError &&
                <label className= 'label-error'>Su contraseña o usuario esta mal</label>
                }
                <Label text = 'Usuario'/>
                <Input
                attribute = {{
                    id:'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder:'Ingrese su usuario'
                }}
                handleChange={handleChange}
                
                />
                <Label text = 'Contraeña'/>
                <Input
                attribute = {{
                    id:'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder:'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                param={passwordError}
                />
    {passwordError && 
                <label className='label-error'>Contraseña invalida o incompleta</label>
    }
                <div className= 'submit-button-container'>
                <button onClick={handleSubmit} className='submit-button'>
                    Ingresar
                </button>
                </div>
            </div>
        </div>
    )
};
export default Login2;