import * as React from 'react';
import IPizza from 'src/models/IPizza';

export interface IPizzaTableProps {
}

export default function PizzaTable (props: IPizzaTableProps) {
  const [pizzas, setPizzas] = React.useState<IPizza[]>([])
  
  React.useEffect(() => {
    fetch("http://localhost:5000/pizzas")
  }, [])

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
