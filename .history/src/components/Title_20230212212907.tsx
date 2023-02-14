import { Link } from 'react-router-dom';
import pizzaLogo from '../assets/img/pizza-logo.png'
import styles from '../components/Title.module.css';


export interface ITitleProps {
}

export default function Title(props: ITitleProps) {
    return (
        <div>
         
            <div className={styles.titleContainer}>
                {/* <img className={styles.logo} src={pizzaLogo} alt="ejstrupholmPizza"/> */}
                <Link to={"/"}>
                <h1 className={styles.title}>Pizza Kebab House Ejstrupholm</h1>
                </Link>
            </div>
        </div>
    );
}
