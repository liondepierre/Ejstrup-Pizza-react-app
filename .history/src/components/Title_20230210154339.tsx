import pizzaLogo from '../assets/img/pizza-logo.png'
import styles from '../components/Title.module.css';
import EliteSmiley from './EliteSmiley';


export interface ITitleProps {
}

export default function Title(props: ITitleProps) {
    return (
        <div>
            <div className={styles.eliteSmileyImage}>
                <EliteSmiley width='450px' height='150px' />
            </div>
            <div className={styles.titleContainer}>
                {/* <img className={styles.logo} src={pizzaLogo} alt="ejstrupholmPizza"/> */}
                <h1 className={styles.title}>Pizza Kebab House</h1>
                <h1 className={styles.title}>Ejstrupholm</h1>
                <h1 className={styles.sinceTitle}><i>est. 1997</i></h1>
            </div>
        </div>
    );
}
