import { useFormik } from 'formik'
import axios from 'axios'
import React, { useEffect } from 'react'
import './Login.css'

const Login = ({ setAuth }) => {
    const validate = values => {
        const errors = {}
        if (!values.email.trim()) errors.email = 'Email requerido'
        if (!values.password.trim()) errors.password = 'Contraseña requerida'
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: value => {
            axios.post(`http://challenge-react.alkemy.org/`, value)
                .then(response => {
                    window.localStorage.setItem('tokenReact', response.data.token)
                    setAuth(true)
                }).catch(() => {
                    return alert("Datos ingresados incorretos")
                })
        }
    })
    useEffect(() => {
        if (window.localStorage.getItem('tokenReact')) setAuth(true)
    }, [])

    return (
        <div className='login-form'>
            <form onSubmit={formik.handleSubmit} className='login-form'>
                {formik.errors.email ? <label className='navbar-brand formik-err'>{formik.errors.email}</label> : <label className='navbar-brand'>Email</label>}
                <input name='email' type='email' placeholder='Email' onChange={formik.handleChange}></input>
                {formik.errors.password ? <label className='navbar-brand formik-err'>{formik.errors.password}</label> : <label className='navbar-brand'>Contraseña</label>}
                <input name='password' type='password' placeholder='Contraseña' onChange={formik.handleChange}></input>

                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
        </div>
    )
}

export default Login
