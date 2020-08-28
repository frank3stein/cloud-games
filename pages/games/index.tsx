import React, { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../components/game.module.css';
import FilteredGames from '../../components/FilteredGames'
export interface GameResponse {
    title: string;
    id: number;
    sortName: string;
    isFullyOptimized: boolean;
    steamUrl: string;
    store: string; publisher: string;
    genres: string[];
    status: string;

}

const Games = ({ games= [] }: { games: GameResponse[] }): ReactElement => {
    return (
        <Layout>
            <Head>
                <title className={styles.geforce}>Geforce Now Games</title>
            </Head>
            <h1><span className={styles.geforce}>Geforce Now</span></h1>
            <FilteredGames games={games}/>
        </Layout>
    )
}

export default Games;