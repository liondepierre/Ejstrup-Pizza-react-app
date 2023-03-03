import React from 'react';
import NavBar from '../components/NavBar';
export interface IMenuCardProps {
}

interface Drink {
    id: number;
    name: string;
    brand: string;
    size: number;
}

export default function MenuCard(props: IMenuCardProps) {
    const [drinks, setDrinks] = React.useState<Drink[]>([]);

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
                <div style={{display: "flex", flexDirection: "column", alignItems: "center" }} key={drink.id}>
                    <h1>{drink.name}</h1>
                    {/* <h2>{drink.brand}</h2>
                    <h3>{drink.size} oz</h3> */}
                </div>
            ))}
        </div>
    );
};




