import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import mapIcon from '../assets/img/POISolid.svg'
import telephoneIcon from '../assets/img/Phone.svg'
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import mailIcon from '../assets/img/Mail.svg'
import SlideShow from '../components/SlideShow';
import foodImage from '../assets/img/slideshowImages/foodImage.jpg'
import burger from '../assets/img/slideshowImages/burger.jpg'
import hawaiiPizza from '../assets/img/slideshowImages/hawaiiPizza.jpg'
import { IPhoto } from '../models/IPhoto';


export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const [telephoneNumber, setTelephoneNumber] = React.useState<string>("75 77 30 29");
    const [cellPhoneNumber, setCellPhoneNumber] = React.useState<string>("53 77 30 29");
    const [emailAdress, setEmailAdress] = React.useState<string>("Ejstruppizza@hotmail.dk");

    const onPhoneNumberClicked = (phoneNumber: string): string => {
        navigator.clipboard.writeText(phoneNumber)

        alert(`kopieret nummeret: ${phoneNumber}`)
        return phoneNumber;
    }

    const onEmailAdressClicked = (): void => {
        window.open(`mailto: ${emailAdress}?subject=-->Dit Emne<--`)
    }

    const photos: IPhoto[] = [
        {
            path: foodImage,
            title: "foodImage"
        },
        {
            path: burger,
            title: "menuCard"
        },
        {
            path: hawaiiPizza,
            title: "restaurantImage"
        },
    ]

    return (
        <div className={styles.homeRoot}>
            <NavBar />
            <div className={styles.squares}>
                <div className={styles.leftSquare}>
                    <SlideShow photo={photos} />
                </div>
                <div className={styles.middleSquare}>
                    <div className={styles.generalInfo}>
                        <a target="_blank" href='https://goo.gl/maps/u5Vt21RLk24T2ryBA' className={styles.field}>
                            <img className={styles.icon} src={mapIcon} alt="adresse" />
                            <h1>SØNDERGADE 4, 7361 EJSTRUPHOLM</h1>
                        </a>
                        <div onClick={() => onPhoneNumberClicked(telephoneNumber)} id='telephone' className={styles.field}>
                            <img className={styles.icon} src={telephoneIcon} alt="telefon" />
                            <h1>{telephoneNumber}</h1>
                        </div>
                        <div onClick={() => onPhoneNumberClicked(cellPhoneNumber)} className={styles.field}>
                            <img className={styles.icon} src={cellPhoneIcon} alt="mobil-telefon" />
                            <h1>53 77 30 29</h1>
                        </div>
                        <div onClick={() => onEmailAdressClicked()} className={styles.field}>
                            <img className={styles.icon} src={mailIcon} alt="mail" />
                            <h1>{emailAdress}</h1>
                        </div>
                    </div>

                </div>
                <div className={styles.rightSquare}>
                    <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fejstrupholm.grill%2Fposts%2Fpfbid02iPsQSbXmn4VJ6opRVGoz72uXQ7ap9mLXCwx7kZ1kWJe1HCvZ5NR4UYYHFNUFu79Ul&show_text=true&width=500"
                        width="100%" height="100%" 
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}