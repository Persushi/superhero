import React, { useState } from 'react'
import { useLocalStorage } from '../../useLocalStorage'
import HerosResults from '../HerosResults/HerosResults'
import Sidebar from '../Sidebar/Sidebar'

const Home = ({ setAuth }) => {
    const [team, setTeam] = useLocalStorage("team", [])
    const [results, setResults] = useState({ array: [], error: false })

    return (
        <>
            <Sidebar team={team} setTeam={setTeam} setResults={setResults} setAuth={setAuth} />
            <HerosResults results={results} team={team} setTeam={setTeam} />
        </>
    )
}

export default Home
