import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import mapIcon from '../assets/img/POISolid.svg'
import phoneIcon from '../assets/img/Phone.svg'
import cellIcon from '../assets/img/CellPhone.svg'
import mail from '../assets/img/Mail.svg'
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
                        <div className={styles.field}>
                            <img className={styles.icons} src={mapIcon} alt="adresse" />
                            <h1>SØNDERGADE 4, 7361 EJSTRUPHOLM</h1>
                        </div>
                        <div className={styles.field}>
                            <img className={styles.icons} src={phoneIcon} alt="telefon" />
                            <h1>75 77 30 29</h1>
                        </div>
                        <div className={styles.field}>
                            <img className={styles.icons} src={cellIcon} alt="mobil-telefon" />
                            <h1>53 77 30 29</h1>
                        </div>
                        <div className={styles.field}>
                            <img className={styles.icons} src={cellIcon} alt="mobil-telefon" />
                            <h1>ejstruppizza@hotmail.dk</h1>
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
