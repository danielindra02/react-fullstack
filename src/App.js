
import './App.css';
import { NavbarComponent } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Cart } from './Pages/Cart';
import { ShopCategory } from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women"/>} />
          <Route path="/kids" element={<ShopCategory category="kid"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
