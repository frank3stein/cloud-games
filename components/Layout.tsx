import { ReactChild } from 'react'
import styles from './layout.module.css'

function Layout({ children }: { children: ReactChild[] }) {
    return <div className={styles.container}>{children}</div>
}

export default Layout