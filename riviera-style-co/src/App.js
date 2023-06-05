import './App.css';
import Home from './Components/Pages/Home/Home'
import Layout from './Components/Layout/Layout/Layout';
import Shopping from './Components/Pages/Shopping/Shopping';
import ShopItem from './Components/Pages/ShopItem/ShopItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTopOnRefresh } from './ScrollToTopOnRefresh';
import About from './Components/Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTopOnRefresh />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shopItem" element={<ShopItem />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
