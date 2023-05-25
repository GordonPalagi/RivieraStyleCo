import './App.css';
import Home from './Components/Pages/Home';
import Layout from './Components/Layout/Layout';
import Shopping from './Components/Pages/Shopping';
import ShopItem from './Components/Pages/ShopItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTopOnRefresh } from './ScrollToTopOnRefresh';
import About from './Components/Pages/About';


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



    // <IntersectionObserverTest/>

  )
}

export default App;
