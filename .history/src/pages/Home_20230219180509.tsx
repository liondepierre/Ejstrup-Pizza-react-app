import * as React from 'react';
import NavBar from '../components/NavBar';
import styles from '../pages/Home.module.css';
import mapIcon from '../assets/img/POISolid.svg'
import phoneIcon from '../assets/img/Phone.svg'
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
                        <div className={styles.addressField}>
                            <img className={styles.mapIcon} src={mapIcon} alt="adresse"/>
                            <h1>SØNDERGADE 4, 7361 EJSTRUPHOLM</h1>
                        </div>
                        <div className={styles.telephoneField}>
                            <img className={styles.phoneIcon} src={phoneIcon} alt="adresse"/>
                            <h1>75 77 30 29</h1>
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
