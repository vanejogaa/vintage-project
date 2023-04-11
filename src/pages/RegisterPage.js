import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../api/auth.api';
import styles from './RegisterPage.module.css';


const RegisterPage = () => {

    const [userRegisterData, setUserRegisterData] = useState({email: '', pass: ''})
    const [registerAlert, setRegisterAlert] = useState('')

    function onRegister(e){
        e.preventDefault()
        const user = login(userRegisterData.email,userRegisterData.pass)

        if(user){
            alert('LOGIN CORRECTO')
            setRegisterAlert('')
        }
        else{
            setUserRegisterData({email: '', pass: ''})
            setRegisterAlert('Login incorrecto')
        }

    }

  return(
  <div className={styles.RegisterPage}>
  <span style={{color: 'red'}}>{registerAlert}</span>
    <form>
    <fieldset>
            <legend>Nombre</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>Apellidos</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>Email</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>Teléfono</legend>
            <input value={userRegisterData.pass} onChange={(e)=>setUserRegisterData({...userRegisterData, pass: e.target.value})} placeholder='password' type='password'/>
        </fieldset>
        <button onClick={onRegister}>login</button>
        <fieldset>
            <legend>Fecha de nacimiento</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset><fieldset>
            <legend>Dirección</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>Ciudad</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
        <fieldset>
            <legend>Código postal</legend>
            <input value={userRegisterData.email} onChange={(e)=>setUserRegisterData({...userRegisterData, email: e.target.value})} placeholder='email'/>
        </fieldset>
    </form>
  </div>
  )
};

export default RegisterPage;

