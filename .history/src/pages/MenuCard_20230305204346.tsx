import React from 'react';
import DrinksTable from 'src/components/DrinksTable';
import IDrink from 'src/models/IDrink';
import NavBar from '../components/NavBar';
import titleImg  from 'src/assets/img/menuHeaderImg.png'
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {

    return (
        <div >
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", border: "3px solid black", margin: "0.5%", padding: "1%" }}>
                <div style={{ display: "flex", gap: "1%", flexDirection: "row", justifyContent: "center", margin: "1%", border: "3px solid black" }}>
                    <img style={{height: "15%", width: "15%"}} src={titleImg}/>
                </div>
                <DrinksTable />
            </div>
        </div>
    );
};




