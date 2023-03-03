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
        console.log("fjeiwfj")
        fetch('http://localhost:5000/drinks')
            .then((response) => response.json())
            .then((data) => setDrinks(data))
            .catch((error) => console.error('Error retrieving data from server: ', error));
    }, []);

    return (
        <div>
            <NavBar />
            {drinks.map((drink) => (
                <div key={drink.id}>
                    <h3>{drink.name}</h3>
                    <p>{drink.brand}</p>
                    <p>{drink.size} oz</p>
                </div>
            ))}
        </div>
    );
};




