import React from 'react'
import Nvidia from '../icons/nvidia.svg'
import Steam from '../icons/steam.svg'
import styles from './game.module.css'

const StoreSvg = ({ store }: { store: string; }): JSX.Element => {
    return (
        <>
            {store === "Steam" ? <Steam className={styles.svg} /> : <Nvidia className={styles.svg} />}
        </>
    )
}

export default StoreSvg;