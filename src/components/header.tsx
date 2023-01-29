import styles from '../styles/Home.module.scss';
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
export default function Header(){
    const { data: session, status } = useSession()
    const loading = status === "loading"
    return(
        <header className={styles.header}>
            <div></div>
            <nav className={styles.nav}>
                <Link className={styles.navLink} href="/">Главная</Link>
                <Link className={styles.navLink} href="statistic">Статистика</Link>
                <Link className={styles.navLink} href="calendar">Календарь</Link>
                <Link className={styles.navLink} href="rating">Рейтинг</Link>
                <Link className={styles.navLink} href="about">О проекте</Link>
                <Link className={styles.navLink} href="create">Создать турнир</Link>
            </nav>
            <div>
                {!session && (
                    <>
                    <a
                        href={`/api/auth/signin`}
                        className={styles.buttonPrimary}
                        onClick={(e) => {
                        e.preventDefault()
                        signIn()
                        }}
                    >
                        Вход
                    </a>
                    </>
                )}
                {session?.user && (
                    <>
                    <span className={styles.signedInText}>
                        <strong>{session.user.email ?? session.user.name}</strong>
                    </span>
                    <a
                        href={`/api/auth/signout`}
                        className={styles.button}
                        onClick={(e) => {
                        e.preventDefault()
                        signOut()
                        }}
                    >
                        Выход
                    </a>
                    </>
                )}
            </div>
            
        </header>
    )
}