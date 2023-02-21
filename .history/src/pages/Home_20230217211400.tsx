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
                    <h5>left square</h5>
                </div>
                <div className={styles.middleSquare}>
                    <h5>middle square</h5>
                </div>
                <div className={styles.rightSquare}>
                    <h5>right square</h5>
                </div>
            </div>
        </div>
    );
}
