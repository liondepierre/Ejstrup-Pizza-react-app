import * as React from 'react';
import IDrink from 'src/models/IDrink';

export interface IDrinksTableProps {
}

export default function DrinksTable(props: IDrinksTableProps) {
    const [drinks, setDrinks] = React.useState<IDrink[]>([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/drinks")
            .then((response: Response) => response.json())
            .then((data) => setDrinks(data))
            .catch((error) => console.log("There was an error retrieving data", error))
    }, [])
    return (
        <div style={{backgroundColor: "rgba(255, 255, 255, 0.659)"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Drikkevarer</h1>
            {drinks.map((drink: IDrink) => {
                return (
                    <div style={{fontWeight: "bold", fontSize: "25px", fontFamily: "Segoe UI", display: "flex", gap: "0.6%", flexDirection: "row", alignItems: "center", justifyContent: "center" }} key={drink.id}>
                        <p>{drink.size}</p>
                        <p>{drink.brands}....................................... </p>
                        <p>{drink.price} kr.</p>
                    </div>
                )
            })}

        </div>
    );
}
