import { Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import MenuCard from './pages/MenuCard';
import OpeningHours from './pages/OpeningHours';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <Routes>
      <Route path='/galleri' element={<Gallery />} />
      <Route path='/' element={<Home />} />
      <Route path='/menukort' element={<MenuCard />} />
      <Route path='/åbningstider' element={<OpeningHours />} />
    </Routes>
  );
}
