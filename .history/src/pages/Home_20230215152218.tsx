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
                <img src={restuarantImage} alt="Background Image" className={styles.overlayImage} />
                <div className={styles.overlayContent}>
                    <h1>Pizza Kebab House Ejstrupholm</h1>
                    <p>SØNDERGADE 4<br />EJSTRUPHOLM, 7361 DK</p>
                    <p>TEL: 75 77 30 29 <br />Email: ejstruppizza@hotmail.dk</p>
                    <p>MOB: 53 77 30 29</p>
                    <a href="https://www.facebook.com/myfacebookpage" target="_blank">Visit us on Facebook</a>
                </div>
            </div>

        </div>
    );
}
