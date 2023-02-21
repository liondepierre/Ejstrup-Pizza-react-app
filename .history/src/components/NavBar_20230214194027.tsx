import { Link } from 'react-router-dom';
import styles from '../components/NavBar.module.css';
import ContactInformation from './ContactInformation';
import Title from './Title';
export interface INavBarProps {
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className={styles.navbarClass}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div >
                    <Title />
                    <div className="navbar">
                        <Link className={styles.navLink} to={"/"}><i className='fa fa-fw fa-home'>Hjem</i></Link>
                        <Link to={"/"}><i className='fa fa-fw fa-home'>Hjem</i></Link>
                        <Link to={"/"}><i className='fa fa-fw fa-home'>Menukort</i></Link>
                        <Link to={"/"}><i className='fa fa-fw fa-home'>Åbningstider</i></Link>
                        <Link to={"/"}><i className='fa fa-fw fa-home'>Galleri</i></Link>
                    </div>
                    {/* <nav className={styles.navbar}>
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
                    </nav> */}
                </div>
            </div>
        </div>
    );
}
