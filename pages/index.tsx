import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <div >
      <Head>
        <title>Cloud Games Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/games">
        <a>Game</a>
      </Link>
    </div>
  )
}
