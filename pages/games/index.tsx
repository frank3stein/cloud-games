import React, { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default (): ReactElement => {
    return (
        <Layout>
            <Head>
                <title>NameGame</title>
            </Head>
            <p>Games</p>
        </Layout>
    )
}