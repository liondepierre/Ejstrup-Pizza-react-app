import * as React from 'react';
import IPizza from 'src/models/IPizza';

export interface IPizzaTableProps {
}

export default function PizzaTable(props: IPizzaTableProps) {
  const [pizzas, setPizzas] = React.useState<IPizza[]>([])

  React.useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((res: Response) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.log("There was an error retrieving data", error))
  }, [])

  return (
    <div style={{overflow: "visible"}}>
      {pizzas.map((value: IPizza) => {
        return (
          <div key={value.id}>
            <h1>{value.menu_number}</h1>
            <h1>{value.name}</h1>
            <h1>{value.price}</h1>
            <h1>{value.ingredients}</h1>

          </div>
        )
      })}
      <h1></h1>
    </div>
  );
}
