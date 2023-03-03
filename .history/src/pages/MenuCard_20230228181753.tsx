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
        fetch('/api/drinks')
          .then((response) => response.json())
          .then((data) => setDrinks(data));
      }, []);

    return (
        <div>
            <NavBar />
        </div>

    );
}
