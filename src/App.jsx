import './App.css'
import { Routes, Route } from 'react-router-dom'

//Components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// Pages
import HomePage from "./pages/HomePage"
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import AddCarPage from './pages/AddCarPage';
import CarDetailsPage from './pages/CarDetailsPage';
import CarsListPage from './pages/CarsListPage';
import EditCarPage from './pages/EditCarPage';
import BidsPage from './pages/BidsPage';
import SearchPage from './pages/SearchPage';


function App() {

  return (
    <main>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />;
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/cars" element={<CarsListPage/>} />
          <Route path="/cars/:id" element={<CarDetailsPage/>} />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/cars/edit/:id" element={<EditCarPage />} />
          <Route path="/bids" element={<BidsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
  </main>
  )
}

export default App
