/* eslint-disable */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import dclogo from '../../Assets/img/DC.png'
import mrvlogo from '../../Assets/img/marvel.png'
import dhlogo from '../../Assets/img/darkhorse.png'

const Team = ({ team, setTeam }) => {
    let powerstats = {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
    }
    let otherstats = {
        height: 0,
        weight: 0
    }
    const resultsFunction = team.map((char) => {
        if (!Number.isNaN(parseInt(char.powerstats.intelligence))) powerstats.intelligence += parseInt(char.powerstats.intelligence)
        if (!Number.isNaN(parseInt(char.powerstats.strength))) powerstats.strength += parseInt(char.powerstats.strength)
        if (!Number.isNaN(parseInt(char.powerstats.speed))) powerstats.speed += parseInt(char.powerstats.speed)
        if (!Number.isNaN(parseInt(char.powerstats.durability))) powerstats.durability += parseInt(char.powerstats.durability)
        if (!Number.isNaN(parseInt(char.powerstats.power))) powerstats.power += parseInt(char.powerstats.power)
        if (!Number.isNaN(parseInt(char.powerstats.combat))) powerstats.combat += parseInt(char.powerstats.combat)
        otherstats.height += parseInt(char.appearance.height[1])
        otherstats.weight += parseInt(char.appearance.weight[1])
        const logo = {
            "DC Comics": dclogo,
            "Dark Horse Comics": dhlogo,
            "Marvel Comics": mrvlogo
        }
        return (
            <div className={`col-sm-6 col-md-4 col-lg-3 charCard ${char.biography.alignment}`} style={{ backgroundImage: `url(${logo[char.biography.publisher]}), url(${char.image.url})` }}>
                <div className='close'>
                    <button className="btn btn-danger" onClick={() => { setTeam(team.filter((e) => e.id !== char.id)) }}>X</button></div>
                <div className='cardSeparator'><Link to={`/id/${char.id}`} className="cardName">{char.name}</Link><span className={char.biography.alignment}>{char.biography.alignment}</span></div>
            </div >)
    })
    const statDominante = Object.keys(powerstats).reduce((a, b) => powerstats[a] > powerstats[b] ? a : b)


    return (
        <div className='row justify-content-center'>
            {team.length > 0 ? <><div>
                <span className='speciality'>Especialidad en {statDominante}</span> <br />
                <label className='stats'>Inteligencia: {powerstats.intelligence}</label> <progress value={powerstats.intelligence} max="500"></progress><br />
                <label className='stats'>Fuerza: {powerstats.strength}</label> <progress value={powerstats.strength} max="500"></progress> <br />
                <label className='stats'>Velocidad: {powerstats.speed}</label> <progress value={powerstats.speed} max="500"></progress> <br />
                <label className='stats'>Durabilidad: {powerstats.durability}</label> <progress value={powerstats.durability} max="500"></progress> <br />
                <label className='stats'>Poder: {powerstats.power}</label> <progress value={powerstats.power} max="500"></progress> <br />
                <label className='stats'>Combate: {powerstats.combat}</label> <progress value={powerstats.combat} max="500"></progress> <br />
            Altura promedio: {(otherstats.height / team.length).toFixed(1)}cm
            Peso promedio: {(otherstats.weight / team.length).toFixed(1)}kg
            </div>
                {resultsFunction}</> : <span className='speciality'>No hay personajes</span>}
        </div>
    )
}

export default Team
