import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import restuarantImage from '../assets/img/restuaruantImage.jpg'
export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    type OverlayProps = {
        title: string;
        phone: string;
        secondaryPhone: string;
        address: string;
        email: string;
        facebookLink: string;
        imageUrl: string;
    }

    const Overlay: React.FC<OverlayProps> = ({
        title,
        phone,
        secondaryPhone,
        address,
        email,
        facebookLink,
        imageUrl
    }) => {
        const [show, setShow] = React.useState(false);

        React.useEffect(() => {
            setShow(true);
        }, []);


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
}
