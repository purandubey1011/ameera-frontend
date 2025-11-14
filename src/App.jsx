import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ReserveTable from './components/ReserveTable/ReserveTable';
import RestaurantBooking from './components/RestaurantBooking/RestaurantBooking';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve-table" element={<ReserveTable />} />
        <Route path="/booking" element={<RestaurantBooking />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
