import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alerta from './components/Alerta'
import EmailInput from './components/EmailInput'
import PasswordInput from './components/PasswordInput'
import LoginButton from './components/LoginButton'
import LoginForm from './components/LoginForm'
import EmailField from './components/EmailField'
import PasswordField from './components/PasswordField'

function App() {

  return (
  <div><h1>AULA PRATICA</h1>
  <LoginForm/>
  <Alerta/>
  <EmailField/>
  <PasswordField/>
  <EmailInput/>
  <PasswordInput/>
  <LoginButton/>
  </div>

  )
}

export default App