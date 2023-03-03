import React from 'react';
import NavBar from '../components/NavBar';
import IDrink from '../providers/DrinksProvider';
import DrinksProvider from '../providers/DrinksProvider'
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const [drinks, setDrinks] = React.useState<IDrink[]>([]);

    // React.useEffect(() => {
    //     const drinksProvider = new DrinksProvider();

    //     drinksProvider.getDrinks()
    //         .then((result) => {
    //             setDrinks(result)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])


    return (
        <div>
            <NavBar />
            <div>
                {drinks.map((drink, index) => {return (
                    <h1 id={drink.id}>{drink.brand}</h1>
                )})}
            </div>
           
        </div>

    );
}
