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
                    <div className={styles.overlayContent}>
                        <h1>My Website Title</h1>
                        <ul className={styles.overlayContact}>
                            <li>Phone: 555-123-4567</li>
                            <li>Secondary Phone: 555-123-7890</li>
                            <li>Address: 1234 Main Street, Anytown, USA 12345</li>
                            <li>Email: info@mywebsite.com</li>
                        </ul>
                        <a href="https://www.facebook.com/myfacebookpage" target="_blank" className={styles.overlayFacebook}>Visit us on Facebook</a>
                    </div>
            </div>

        </div>
    );
}
