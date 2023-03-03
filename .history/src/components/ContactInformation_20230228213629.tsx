import * as React from 'react';
import styles from '../components/ContactInformation.module.css';

export interface IContactInformationProps {
}

export default function ContactInformation(props: IContactInformationProps) {
    return (
        <div className={styles.contactInfoContainer}>
            <h3>Contact Information</h3>
            <p>Telefon: 75 77 30 29</p>
            <p>Mobil: 53 77 30 29</p>
            <p>Adresse: SØNDERGADE 4,  7361 EJSTRUPHOLM</p>
            <p>Email: ejstruppizza@hotmail.dk</p>
        </div>
    );
}
