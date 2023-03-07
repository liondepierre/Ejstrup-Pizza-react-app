import React from 'react';
import DrinksTable from 'src/components/DrinksTable';
import IDrink from 'src/models/IDrink';
import NavBar from '../components/NavBar';
import rightIcon from '../assets/img/ChevronRight.svg';
import leftIcon from '../assets/img/ChevronLeft.svg';
import styles from '../pages/MenuCard.module.css';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const [slideCounter, setSlideCounter] = React.useState(0);


    const nextSlide = () => {
        setSlideCounter(prev => prev + 1)
        console.log(slideCounter)
    }

    return (
        <div >
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", border: "0px solid black", margin: "0.5%", padding: "1%" }}>
                <div style={{ display: "flex", gap: "1%", flexDirection: "row", justifyContent: "center", margin: "0.2%", border: "0px solid black" }}>
                    <img className={styles.leftArrow}
                        src={leftIcon} alt="prev" />
                    <h1 style={{ borderBottom: "1px solid black", display: "flex", justifyContent: "center" }}>Drikkevarer</h1>
                    <img onClick={() => nextSlide()} className={styles.rightArrow}
                        src={rightIcon} alt="gå til højre" />
                </div>
                <DrinksTable />
            </div>
        </div>
    );
};




