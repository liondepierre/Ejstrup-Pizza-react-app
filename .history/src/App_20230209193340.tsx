import { Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/OpeningHours' element={<Gallery />} />
    </Routes>
  );
}
