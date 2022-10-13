import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const navStyles = ({ isActive }: {isActive : boolean}) => {
        return ({
            color : isActive ? "white" : "black"
        })
    }

    return (
        <>
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */} 

            {/* Use nav links for nav bar breadcrumbs or anywhere when you need active class otherwise use normal Link tag for elswhere it provides active class on the link which is active in the route */}
            <NavLink end style={navStyles} to="/">Home</NavLink>
            <NavLink style={navStyles} to="about">About</NavLink>
            <NavLink style={navStyles} to="products">Products</NavLink>
        </nav>
        </>
    )
}
export default Navbar