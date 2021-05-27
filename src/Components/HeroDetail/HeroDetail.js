import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './HeroDetail.css'
import { Link } from 'react-router-dom'
const { REACT_APP_APIKEY } = process.env

const HeroDetail = ({ match }) => {
    const id = match.params.id
    const [dataState, setDataState] = useState("success")
    const [charDetail, setCharDetail] = useState({})
    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api/${REACT_APP_APIKEY}/${id}`)
            .then(response => {
                setDataState(response.data.response)
                if (response.data.response === "success") return setCharDetail(response.data)
                setCharDetail({ id: "0" })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='contenedorFlotante' >
            {/* eslint-disable-next-line */}
            {charDetail.id == id || dataState == "error" ? <>
                {/* eslint-disable-next-line */}
                {charDetail.id == id ?
                    <div className='charDetails' style={{ backgroundImage: `url(${charDetail.image.url})` }}>
                        <Link className='close' to='/' onClick={() => setDataState("")}><button className='btn btn-danger'>X</button></Link>
                        <div className='charText'><h2>{charDetail.biography["full-name"]}</h2>
                            <h2>{charDetail.name}</h2>
                            <span>Peso: {charDetail.appearance.weight[1]} Altura: {charDetail.appearance.height[1]}</span>
                            <span>Color de pelo: {charDetail.appearance["hair-color"]}</span>
                            <span>Color de ojos: {charDetail.appearance["eye-color"]}</span>
                            <span>Lugar de trabajo: {charDetail.work.base}</span>
                        </div>
                    </div>
                    :
                    <div className='charDetails' >
                        <Link to='/' onClick={() => setDataState("success")}><button className='btn btn-danger'>X</button></Link>
                        <div className='charText'>
                            <h2>No se encontró personaje con ese Id</h2>
                        </div>
                    </div>}
            </>
                : <>
                    <div class="spinner-border text-light" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <Link to='/'>click para salir</Link></>}

        </div>
    )
}

export default HeroDetail

