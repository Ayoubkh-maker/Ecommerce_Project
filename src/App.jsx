import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {OrdersPage} from './pages/orders/OrdersPage';
import {TrackingPage} from './pages/traking/TrakingPage'; 
import { Routes, Route } from 'react-router';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='traking' element={<TrackingPage/>}/>

    </Routes>
  );
}

export default App
