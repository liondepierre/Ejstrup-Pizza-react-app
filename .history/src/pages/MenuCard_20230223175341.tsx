import React from 'react';
import NavBar from '../components/NavBar';
// import IDrink, { DrinksProvider } from '../providers/DrinksProvider';

export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    // const [drinks, setDrinks] = React.useState<IDrink[]>([]);

    // React.useEffect(() => {
    //     const drinkProvider = new DrinksProvider();
    //     drinkProvider.getDrinks()
    //       .then((results) => {
    //         setDrinks(results);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, []);
    return (
        <div>
            <NavBar />
           
        </div>

    );
}
