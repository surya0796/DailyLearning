import { Outlet, useParams, Link } from 'react-router-dom';

export const Users = () => {
    const params = useParams() //This hook contains the dynamic routes name as a key value pair. 
    const userId = params.userId
    console.log(params);
    return (
        <>
            <div>
                <Link to="1">Users 1</Link >
                <Link to="2" >Users 2</Link >
                <Link to="3" >Users 3</Link >
            </div>
                <span>{userId}</span>
            <Outlet/>
        </>
    )
}
