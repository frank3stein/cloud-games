import Game from './Game'
import React from 'react'

const Games = ({games}: {games : GameResponse[]}) : JSX.Element => {
    return (
        <>
        { games.map(
            (game) =>  <Game key={game.id}{...game} />)}
        </>
    )
}

export default Games;