import { Route, Routes } from "react-router-dom";
import { Home } from "../layouts/Home";
import { About } from '../layouts/About';
import Navbar from '../components/NavBar';
import { Confirmation } from "../components/Confirmation";
import { Products } from '../layouts/products';
import { Featured } from '../components/Featured';
import { New } from '../components/New';
import { Error } from "../layouts/ErrorPage";
import Counter from '../components/counter/index';

export const Routing = () => {
    return (
      <>
      <Navbar/>
      {console.log(Counter())}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<Confirmation/>}/>
        <Route path="products" element={<Products/>}>
            <Route path="featured" element={<Featured/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </>
    )
}

