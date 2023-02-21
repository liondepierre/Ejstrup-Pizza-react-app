import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import mapIcon from '../assets/img/POISolid.svg'
import phoneIcon from '../assets/img/Phone.svg'
import cellPhoneIcon from '../assets/img/CellPhone.svg'
import mailIcon from '../assets/img/Mail.svg'
export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const [isPopupVisible, setPopupVisible] = React.useState<boolean>(false);

    return (
        <div className={styles.homeRoot}>
            <NavBar />
            <div className={styles.squares}>
                <div className={styles.leftSquare}>
                    <h3>left square</h3>
                </div>
                <div className={styles.middleSquare}>
                    <div className={styles.generalInfo}>
                        <a target="_blank" href='https://goo.gl/maps/u5Vt21RLk24T2ryBA' className={styles.field}>
                            <img className={styles.icon} src={mapIcon} alt="adresse" />
                            <h1>SØNDERGADE 4, 7361 EJSTRUPHOLM</h1>
                        </a>
                        <div id='telephone' className={styles.field}>
                            <img className={styles.icon} src={phoneIcon} alt="telefon" />
                            <h1>75 77 30 29</h1>
                        </div>
                        <div className={styles.field}>
                            <img className={styles.icon} src={cellPhoneIcon} alt="mobil-telefon" />
                            <h1>53 77 30 29</h1>
                        </div>
                        <div className={styles.field}>
                            <img className={styles.icon} src={mailIcon} alt="mobil-telefon" />
                            <h1>Ejstruppizza@hotmail.dk</h1>
                        </div>
                    </div>

                </div>
                <div className={styles.rightSquare}>
                    <h3>right square</h3>
                </div>
            </div>
        </div>
    );
}
