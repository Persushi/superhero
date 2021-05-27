import React from 'react'
import axios from 'axios'
import Team from '../Team/Team.js'
import { useFormik } from 'formik'
import './Sidebar.css'
const { REACT_APP_APIKEY } = process.env

const Sidebar = ({ team, setTeam, setResults, setAuth }) => {
    const validate = values => {
        const errors = {}
        if (!values.search.trim()) errors.search = 'Requerido'
        else if (values.search.trim().length < 3) errors.search = 'Mínimo 3 carácteres'

        return errors;
    }
    const logout = () => {
        window.localStorage.removeItem("tokenReact")
        setAuth(false)
    }
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validate,
        onSubmit: value => {
            axios.get(`https://www.superheroapi.com/api/${REACT_APP_APIKEY}/search/${value.search}`)
                .then(response => {
                    if (response.data.response === "success") return setResults({ array: response.data.results, error: false })
                    setResults({ array: [], error: true })
                })
        }
    })
    return (
        <>
            <nav className='navbar bg-dark navbar-dark sticky-top'>
                <div className="container-fluid">
                    <form onSubmit={formik.handleSubmit} className="d-flex">
                        <input name='search' placeholder='Nombre' value={formik.values.search} className="form-control" onChange={formik.handleChange}></input>
                        <button type='submit' className="btn btn-outline-primary">Buscar</button>
                        {formik.errors.search && <span className='navbar-brand formik-err'>{formik.errors.search}</span>}
                    </form>
                    {/* <ul>
                    <li>
                        <a href='https://www.freepik.es/vectores/fondo'>Vector de Fondo creado por freepik - www.freepik.es</a>
                    </li>
                </ul> */}
                    <span className='navbar-brand log' onClick={logout}>Log Out</span>
                </div>
            </nav>
            <div className='accordion'>
                <div class="accordion-item">
                    <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Mi equipo</span>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body"> <Team team={team} setTeam={setTeam} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
