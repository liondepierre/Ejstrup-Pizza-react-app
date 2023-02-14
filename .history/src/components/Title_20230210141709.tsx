import pizzaLogo from '../assets/img/pizza-logo.png'
import styles from '../components/NavBar.module.css';
import { Link } from 'react-router-dom';
import { url } from 'inspector';

export interface ITitleProps {
}

export default function Title(props: ITitleProps) {
    return (
        <div>
            <div className={styles.titleContainer}>
                {/* <img className={styles.logo} src={pizzaLogo} alt="ejstrupholmPizza"/> */}
                <h1 className={styles.title}>Pizza Kebab House</h1>
                <h1 className={styles.title}>Ejstrupholm</h1>
                <h3 className={styles.title}><i>since. 1997</i></h3>
            </div>
        </div>
    );
}
