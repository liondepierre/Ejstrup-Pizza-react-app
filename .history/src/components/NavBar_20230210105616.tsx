import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
import pizzaLogo from '../assets/img/pizza-logo.png'
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className={styles.navbarClass}>
            <Link to={"/"}>
                <img className={styles.logo} src={pizzaLogo} alt='ejstrup-pizza' />
                <h1 className={styles.title}>Pizza Kebab House</h1>
                <h1 className={styles.title}>Ejstrupholm</h1>
            </Link>
            <nav className={styles.navbar}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to={"/"}>Hjem</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to={"/menukort"}>Menukort</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to={"/åbningstider"}>Åbningstider</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to={"/galleri"}>Galleri</Link>
                </li>
            </nav>
        </div>
    );
}
