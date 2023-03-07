import React from 'react';
import IDrink from 'src/models/IDrink';
import NavBar from '../components/NavBar';
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const [drinks, setDrinks] = React.useState<IDrink[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/drinks')
            .then((response) => response.json())
            .then((data) => setDrinks(data))
            .catch((error) => console.error('Error retrieving data from server: ', error));
    }, []);

    return (
        <div style={{overflowY: "scroll", overflowX: "hidden"}}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", border: "3px solid black", margin: "0.5%", padding: "1%" }}>

                <div style={{ display: "flex", gap: "1%", flexDirection: "row", justifyContent: "center", margin: "1%", border: "3px solid black" }}>
                    <h1>Hello World</h1>
                    
                </div>
                {drinks.map((drink) => (
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "1%", padding: "1%", border: "3px solid black" }} key={drink.id}>
                        <h1>{drink.price} kr.</h1>
                        <h2>{drink.brands}</h2>
                        <h3>{drink.size} oz</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};




