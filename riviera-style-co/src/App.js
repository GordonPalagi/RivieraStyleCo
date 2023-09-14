import './App.css';
import Home from './Components/Pages/Home/Home'
import React from 'react';
import Layout from './Components/Layout/Layout/Layout';
import Shopping from './Components/Pages/Shopping/Shopping';
// import ShopItem from './Components/Pages/ShopItem/ShopItem';
import About from './Components/Pages/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTopOnRefresh } from './ScrollToTopOnRefresh';
import ShoppingLayout from './Components/Layout/Layout/shoppingLayout/ShoppingLayout';

function App() {

  return (
    <BrowserRouter>
        <ScrollToTopOnRefresh />
            <Routes>
              <Route element={<Layout/>}>

                <Route path="/" element={<Home />} />

                <Route path="/shopping" element={<ShoppingLayout/>}>
                  <Route index element={<Shopping />} />
                </Route>

                <Route path='/about' element={<About />} />

              </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App;
