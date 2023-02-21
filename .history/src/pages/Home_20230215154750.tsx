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
            <div className={`overlay ${show ? 'show' : ''}`}>
                <img src={imageUrl} alt="Background Image" className="overlay-image" />
                <div className="overlay-content">
                    <h1>{title}</h1>
                    <ul className="overlay-contact">
                        <li>Phone: {phone}</li>
                        <li>Secondary Phone: {secondaryPhone}</li>
                        <li>Address: {address}</li>
                        <li>Email: {email}</li>
                    </ul>
                    <a href={facebookLink} target="_blank" rel="noreferrer" className="overlay-facebook">Visit us on Facebook</a>
                </div>
            </div>

        </div>
    );
}
