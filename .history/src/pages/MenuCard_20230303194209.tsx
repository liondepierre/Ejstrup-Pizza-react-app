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
        <div>
            <NavBar />
            {drinks.map((drink) => (
                <div style={{display: "flex", flexDirection: "row", alignItems: "center" }} key={drink.id}>
                    <h1>{drink.price}</h1>
                    <h2>{drink.brands}</h2>
                    <h3>{drink.size} oz</h3>
                </div>
            ))}
        </div>
    );
};




