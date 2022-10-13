import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
    <input type="search" placeholder="Search Products..." />
    <Link to="featured">Featured</Link>
    <Link to="new">New</Link>
    <Outlet/>
    </>
  )
}
