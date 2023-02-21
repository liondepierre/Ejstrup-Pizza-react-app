import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import restuarantImage from '../assets/img/restuaruantImage.jpg'
export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div className={styles.homeRoot}>
            <NavBar />
            <div style={{height: "100%", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}} className={styles.squares}>
                <div style={{backgroundColor: "blue"}} className={styles.leftSquare}>
                    left square
                </div>
                <div style={{backgroundColor: "green"}} className={styles.middleSquare}>
                    middle square
                </div>
                <div style={{backgroundColor: "red"}} className={styles.rightSquare}>
                    right square
                </div>
            </div>
        </div>
    );
}
