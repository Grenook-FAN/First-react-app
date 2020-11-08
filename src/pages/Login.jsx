import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {loginToggle} from '../redux/actions'


const errorMsg = 'Имя пользователя или пароль введены не верно ';



const Login = ({loginToggle}) =>  {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [error, setError] = useState();
    const history = useHistory();

    const handleLoginChange = (event) =>{
        setLoginValue(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setPasswordValue(event.target.value)
    }
    const onSelect = (event) =>{
        event.preventDefault();
        if(loginValue === 'Admin' && passwordValue === '123'){
            loginToggle()
            history.push("/profile")          
        }
        else{
            
            setError(true);
            
        }
    }
    


 

    return (
        <div>
            <form>
                <label>
                    Логин:
                    <input type="text" value={loginValue} onChange={handleLoginChange} />
                </label>
                <label>
                    Пароль:
                    <input type="text" value={passwordValue} onChange={handlePasswordChange}/>
                </label>
                <button onClick={onSelect} >Войти</button>
                <div>{error === true ? errorMsg: ''}</div>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    loginToggle
}
export default connect(null, mapDispatchToProps)(Login);
