import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import eliteSmiley from '../assets/img/eliteSmiley.png'
export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div className={styles.overlayContainer}>
            <NavBar />
            <div className={styles.backgroundImage}>
                <div className={styles.overlay}>
                    <div className={styles.contactInfo}>
                        <h1>My Website Title</h1>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>City</p>
                    </div>

                </div>
            </div>
            <div style={{position: "relative", height: "800px"}}>
                <img style={{position: "absolute", bottom: "0", left: 0, width: "25%", height: "15%"}} src={eliteSmiley} alt="eliteSmiley"></img>
            </div>
        </div>
    );
}
