import './App.css';
import Home from './Components/Pages/Home/Home'
import Layout from './Components/Layout/Layout/Layout';
import Shopping from './Components/Pages/Shopping/Shopping';
import ShopItem from './Components/Pages/ShopItem/ShopItem';
import About from './Components/Pages/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTopOnRefresh } from './ScrollToTopOnRefresh';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTopOnRefresh />

        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/shopItem" element={<ShopItem />} />
            <Route path='/about' element={<About />} />
          </Route >
        </Routes>
        
    </BrowserRouter>
  )
}

export default App;
