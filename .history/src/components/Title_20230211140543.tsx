import pizzaLogo from '../assets/img/pizza-logo.png'
import styles from '../components/Title.module.css';
import EliteSmiley from './EliteSmiley';


export interface ITitleProps {
}

export default function Title(props: ITitleProps) {
    return (
        <div>
         
            <div className={styles.titleContainer}>
                {/* <img className={styles.logo} src={pizzaLogo} alt="ejstrupholmPizza"/> */}
                <h1 className={styles.title}>Pizza Kebab House Ejstrupholm <i style={{fontSize: "25px"}}>est. 1997</i></h1>
                <h1 className={styles.sinceTitle}></h1>
            </div>
        </div>
    );
}
