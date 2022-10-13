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
import { Users } from '../layouts/Users/index';
import { UserDetails } from '../components/UserDetails/index';
import { Admin } from '../components/Admin/index';

export const Routing = () => {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<Confirmation/>}/>
        <Route path="products" element={<Products/>}>
            <Route index element={<Featured/>}/> {/* instead of path use index to create a route which runs when directed to /product */}
            <Route path="featured" element={<Featured/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<UserDetails/>}/>    {/* : inside this path make the route as dynamic */}
          <Route path="admin" element={<Admin/>}/>           {/* This route is first matched, if url fails to match then only any dynamic route is choosen*/}
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </>
    )
}

