import React from 'react';
import NavBar from '../components/NavBar';
import IDrink from '../providers/DrinksProvider';
import DrinksProvider from '../providers/DrinksProvider'
export interface IMenuCardProps {
}

export default function MenuCard(props: IMenuCardProps) {
    const [drinks, setDrinks] = React.useState<IDrink[]>([]);

    React.useEffect(() => {
        const drinksProvider = new DrinksProvider();


    }, [])


    return (
        <div>
            <NavBar />
           
        </div>

    );
}
