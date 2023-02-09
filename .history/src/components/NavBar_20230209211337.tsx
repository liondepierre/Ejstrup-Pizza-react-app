import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className='logo'>
                    <a href="#home"><i className="fa fa-angellist"></i> Logo</a>
                </div>
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

            <div className={styles.menuIcon}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className={styles.overlayMenu}>
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>

    );
}

