import pizzaLogo from '../assets/img/pizza-logo.png'
import pizzaSlice from '../assets/img/slice-pizza.jpg'
import styles from '../components/Title.module.css';


export interface ITitleProps {
}

export default function Title(props: ITitleProps) {
    return (
        <div style={{backgroundImage: `url(${pizzaSlice})`}}>
            <div className={styles.titleContainer}>
                {/* <img className={styles.logo} src={pizzaLogo} alt="ejstrupholmPizza"/> */}
                <h1 className={styles.title}>Pizza Kebab House</h1>
                <h1 className={styles.title}>Ejstrupholm</h1>
                <h3 className={styles.title}><i>since. 1997</i></h3>
            </div>
        </div>
    );
}
