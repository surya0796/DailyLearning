import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <input type="search" placeholder="Search Products..." />
      <div className='nested-route'>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </div>
      <Outlet /> {/* It is a placeholder for the component that is nested in the main route.*/}
    </>
  )
}
