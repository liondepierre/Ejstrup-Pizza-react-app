import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import restaurantImage from '../assets/img/restuaruantImage.jpg'

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div className={styles.homeContainer}>
            <NavBar />
            <div className={styles.backgroundImage}>
                {/* <img className={styles.image} src={restaurantImage} alt='restuarant' /> */}
                <div className={styles.overlayTop}>
                    <h1>My Website Title</h1>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>City</p>
                </div>
            </div>
        </div>
    );
}
