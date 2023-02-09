import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
    </Routes>
  );
}
