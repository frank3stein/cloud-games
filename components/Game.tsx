import React, { useEffect, useState } from 'react'
import StoreSvg from './StoreSvg'
import styles from './game.module.css'
import { GetStaticProps } from 'next'
import Price from './Price'

interface GameResponse {
    title: string;
    id: number;
    sortName: string;
    isFullyOptimized: boolean;
    steamUrl: string;
    store: string;
    publisher: string;
    genres: string[];
    status: string;
}


const Game = ({ title, id, sortName, isFullyOptimized, steamUrl, store, publisher, genres, status, }: GameResponse): JSX.Element => {
    const [gameInfo, setGameInfo] = useState(null);
    const steamId = steamUrl.split('/')[4];
    const imageSrc = `https://steamcdn-a.akamaihd.net/steam/apps/${steamId}/capsule_616x353.jpg`

    return (
        
        <>
            <h1>{title}</h1>
            <article className={styles.imagearticle}>
                <a href={steamUrl} className={styles.svglink}>
                    <StoreSvg store={store} />
                </a>
                {store === 'Steam' && <img src={imageSrc} alt={title} />}
            </article>
            <section className={styles.flex}>
                <div className={styles.left}>
                    <p>By {publisher}</p>
                    <p>Genres: {genres && genres.map((genre, index) => <span key={title + index}>{genre}{index === genres.length - 1 ? "" : ", "}</span>
                    )}</p>
                </div>
            </section>
        </>
    )
}





export default Game