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
        <div>
            {drinks.map((drink: IDrink) => {
                return (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}} key={drink.id}>
                        <h1>{drink.size}</h1>
                        <h1>{drink.brands}</h1>
                        <h1>{drink.price}</h1>
                    </div>
                )
            })}

        </div>
    );
}
