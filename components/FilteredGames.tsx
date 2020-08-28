import React, { useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import Games from './Games'

const FilteredGames = ({ games} : { games: GameResponse[]}) => {
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState(games)
    useEffect(()=>{
        setFiltered(
            games.filter(game=> game.title.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])
    return (
        <>

        <SearchBar setSearch={setSearch}/>
        <Games games={filtered}/>
        </>
    )
}

export default FilteredGames;