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
            <div className={styles.squares}>
                <div className={styles.leftSquare}>
                    left square
                </div>
                <div className={styles.middleSquare}>
                    middle square
                </div>
                <div className={styles.rightSquare}>
                    right square
                </div>
            </div>
        </div>
    );
}
