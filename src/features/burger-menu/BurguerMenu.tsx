import styles from './BurguerMenu.module.css';

export function BurguerMenu() {
    return (
        <div>
            <input type="checkbox" name="burger-menu" id={styles.burgermenu} />
            <label htmlFor={styles.burgermenu}>
                <div className={styles.burgerline + ' '  + styles.top}></div>
                <div className={styles.burgerline + ' '  + styles.medium}></div>
                <div className={styles.burgerline + ' '  + styles.low}></div>
            </label>
        </div>
    )
}