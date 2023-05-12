import './App.css';
import Home from './Components/Pages/Home';
import Layout from './Components/Layout/Layout';
import Shopping from './Components/Pages/Shopping';
import ShopItem from './Components/Pages/ShopItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shopItem" element={<ShopItem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
