import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { login } from '../api/auth.api';

const LoginPage = () => {

    const [userLoginData, setUserLoginData] = useState({email: '', pass: ''})
    const [loginAlert, setLoginAlert] = useState('')

    function onLogin(e){
        e.preventDefault()
        const user = login(userLoginData.email,userLoginData.pass)

        if(user){
            alert('LOGIN CORRECTO')
            setLoginAlert('')
        }
        else{
            setUserLoginData({email: '', pass: ''})
            setLoginAlert('Login incorrecto')
        }

    }

  return(
  <div className={styles.LoginPage}>
            <br/>
            <br/>
  <span style={{color: 'red'}}>{loginAlert}</span>
    <form>
        <fieldset>
            <legend>email</legend>
            <input value={userLoginData.email} onChange={(e)=>setUserLoginData({...userLoginData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>password</legend>
            <input value={userLoginData.pass} onChange={(e)=>setUserLoginData({...userLoginData, pass: e.target.value})} placeholder='password' type='password'/>
        </fieldset>
        <br/>
        <button onClick={onLogin}>login</button>
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
        <h2>Consigue un 10% de descuento</h2>
        <h5>Subscríbete a nuestra newsletter y tendrás un 10% de descuento en tu próxima compra, acceso a promociones exclusivas y ¡mucho más!</h5>
        <p>Quiero dar de baja mi suscripción</p>
    </div>
  </div>
  
  )
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;