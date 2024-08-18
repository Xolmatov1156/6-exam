import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Login, Register} from '../../pages/Login'


function LoginPage() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default LoginPage