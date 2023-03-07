import React from 'react';
import DrinksTable from 'src/components/DrinksTable';
import IDrink from 'src/models/IDrink';
import NavBar from '../components/NavBar';
import rightIcon from '../assets/img/ChevronRight.svg';
import leftIcon from '../assets/img/ChevronLeft.svg';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {

    return (
        <div >
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", border: "0px solid black", margin: "0.5%", padding: "1%" }}>
                <div style={{ display: "flex", gap: "1%", flexDirection: "row", justifyContent: "center", margin: "0.2%", border: "0px solid black" }}>
                    <img style={{ width: "2%" }} src={leftIcon} alt="gå til venstre" />
                    <h1 style={{ borderBottom: "1px solid black", display: "flex", justifyContent: "center" }}>Drikkevarer</h1>
                    <img style={{ width: "2%" }} src={rightIcon} alt="gå til højre" />
                </div>
                <DrinksTable />
            </div>
        </div>
    );
};




