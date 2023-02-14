import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
import ContactInformation from './ContactInformation';
import EliteSmiley from './EliteSmiley';
import Title from './Title';
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className={styles.navbarClass}>
            <div >
                <div style={{ marginRight: "100px" }}>
                    <EliteSmiley width='300px' height='100px' />
                </div>
                <Title />
                <div>
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
            </div>
        </div>
    );
}
