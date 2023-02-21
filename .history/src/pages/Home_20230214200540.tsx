import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css'; 

export interface IHomeProps {

}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div>
            <NavBar />
            <div className={styles.overlayTop}>
                <h1>My Website Title</h1>
                <p>Address</p>
                <p>Phone Number</p>
                <p>City</p>
            </div>
            <div className={styles.overlayBottom}>

            </div>
        </div>

    );
}
