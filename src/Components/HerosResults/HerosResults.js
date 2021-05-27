import React from 'react'
import "./HerosResults.css"
import { Link } from 'react-router-dom'
import dclogo from '../../Assets/img/DC.png'
import mrvlogo from '../../Assets/img/marvel.png'
import dhlogo from '../../Assets/img/darkhorse.png'

const HerosResults = ({ results, team, setTeam }) => {

    const resultsFunction = results.array.map((char) => {
        const logo = {
            "DC Comics": dclogo,
            "Dark Horse Comics": dhlogo,
            "Marvel Comics": mrvlogo
        }
        const recruit = (char) => {
            if (team.length > 5) return alert("Puede haber hasta 6 personajes por equipo")
            let allign = {
                good: 0,
                bad: 0,
            }
            allign[char.biography.alignment]++
            for (let i = 0; i < team.length; i++) {
                allign[team[i].biography.alignment]++
                if (team[i].id === char.id) return alert("Este personaje ya está en tu equipo")
                if (allign.good > 3) return alert("Puede haber hasta 3 personajes 'buenos' en tu equipo")
                if (allign.bad > 3) return alert("Puede haber hasta 3 personajes 'malos' en tu equipo")
            }
            return setTeam(team.concat(char))
        }
        return (
            <div className={`col-sm-6 col-md-4 col-lg-3 charCard ${char.biography.alignment}`} style={{ backgroundImage: `url(${logo[char.biography.publisher]}), url(${char.image.url})` }}>
                <div className='close'>
                    <button className="btn btn-primary" onClick={() => { recruit(char) }}>Reclutar</button></div>
                <div className='cardSeparator'><Link to={`/id/${char.id}`} className="cardName">{char.name}</Link><span className={char.biography.alignment}>{char.biography.alignment}</span></div>
            </div >)
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                {results.error && <span className='speciality' style={{ color: "white" }}>No hay resultados</span>}
                {resultsFunction}
            </div>
        </div>
    )
}

export default HerosResults
