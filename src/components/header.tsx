import styles from '../styles/Home.module.scss';
import Link from 'next/link'
export default function Header(){
    return(
        <nav className={styles.nav}>
            <Link className={styles.navLink} href="/">Главная</Link>
            <Link className={styles.navLink} href="statistic">Статистика</Link>
            <Link className={styles.navLink} href="calendar">Календарь</Link>
            <Link className={styles.navLink} href="rating">Рейтинг</Link>
            <Link className={styles.navLink} href="about">О проекте</Link>
            <Link className={styles.navLink} href="create">Создать турнир</Link>
        </nav>
    )
}