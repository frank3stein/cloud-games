import styles from './game.module.css'

interface priceOverview {
    currency: string;
    discount_percent: number;
    final: number;
    final_formatted: string;
    initial: number;
    initial_formatted: string;
}

const Price = ({ priceOverview }: { priceOverview: priceOverview }) => {
    return (
        <>
            <article className={`${styles.flex} ${styles.left}`}>
            {priceOverview.initial_formatted !== '' ? <div>
                <p className={styles.discount}>-{`${priceOverview.discount_percent}%`}</p>
                <p className={styles['discount-linethrough']}>{priceOverview.initial_formatted}</p>
            </div> : null}
            </article>
            {priceOverview ? <p>Price: {priceOverview.final_formatted}</p> : null}
        </>
    )
}

export default Price