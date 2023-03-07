import * as React from 'react';
import IPizza from 'src/models/IPizza';

export interface IPizzaTableProps {
}

export default function PizzaTable (props: IPizzaTableProps) {
  const [pizzas, setPizzas] = React.useState<IPizza[]>([])
  
  React.useEffect(() => {
    console.log("gfkwoegfokp")
  }, [])

  return (
    <div>
      <h1>hwufihuiewiuhfew</h1>
    </div>
  );
}
