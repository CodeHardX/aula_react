import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alerta from './components/Alerta/Alerta'
import EmailInput from './components/Input/EmailInput'
import PasswordInput from './components/Input/PasswordInput'
import LoginButton from './components/Button/LoginButton'
import LoginForm from './components/Titulo/LoginForm'
import EmailField from './components/FormField/EmailField'
import PasswordField from './components/FormField/PasswordField'

function App() {

  return (
  <> 
    <h1>AULA PRATICA</h1>
    <LoginForm/>
    <Alerta/>
    <EmailField/>
    <PasswordField/>
    <EmailInput/>
    <PasswordInput/>
    <LoginButton/>
  </>
  )
}

export default App