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
                        <p>1234 Main Street<br/>Anytown, USA 12345</p>
                        <p>Phone: 555-123-4567<br/>Email: info@mywebsite.com</p>
                        <a href="https://www.facebook.com/myfacebookpage" target="_blank">Visit us on Facebook</a>
                    </div>
            </div>

        </div>
    );
}
