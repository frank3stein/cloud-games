import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Games from './games/index'
import { GetStaticProps } from 'next'

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

export default function Home({ games = [] }: { games: GameResponse[]; }): ReactElement {
  return (
    <Layout >
      <Head>
        <title>Cloud Games Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Link href="/games">
        <a>Game</a>
      </Link> */}
      {games !== null ? <Games games={games} /> : <p>Loading ...</p>}
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const games = await fetch("https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-US.json")
    .then(response => response.json())
    // .then(response => response.slice(response.length-10,response.length))
    // .then(response => response.filter(response => response.steamUrl.split('/')[4] === '330020')) // for testing Children of Morta, discounted game
  return {
    props: {
      games,
    },
  }
}