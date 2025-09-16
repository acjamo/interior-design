import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './component/Header';
import Product from './Pages/Product';
import Service from './Pages/Service';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Productdetail from './Pages/charts';
import Payment from './Pages/Payment';
import Check from './Pages/check';
import Pd from './Pages/pd';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/services" element={<Service />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Productdetail" element={<Productdetail />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/check" element={<Check />} />
                <Route path="/pd" element={<Pd />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
