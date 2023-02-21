import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import restuarantImage from '../assets/img/restuaruantImage.jpg'
export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div>
            <NavBar />
            <div className={styles.overlay}>
                <img src={restuarantImage} alt="Background Image" className={styles.overlayImage}/>
                  
            </div>

        </div>
    );
}
