import { signOut } from 'firebase/auth';
import React  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from './CustomLink';

const Nav = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const menuItems =   <>
                            <li><CustomLink to="/">Home</CustomLink></li>
                            <li><CustomLink to="/inventory">All Parts</CustomLink></li>
                            <li><CustomLink to="/blogs">Blogs</CustomLink></li>
                            <li><CustomLink to="/about">About Us</CustomLink></li>
                            <li><CustomLink to="/contact-us">Contact Us</CustomLink></li>
                            {
                                user &&  <li >
                                <CustomLink to='/dashboard' className="font-bold justify-between">
                                    DashBoard
                                </CustomLink>
                                
                            </li>
                            }
                        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar lg:navbar-start">
                    <div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-sm w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu z-40 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div> 
                        <CustomLink to="/" className="btn btn-ghost normal-case text-lg lg:text-xl">TvLive Manufacture</CustomLink>
                    </div>
                </div>
                <div className="navbar-center">
                    {
                        user ? <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold ml-2" onClick={()=> {signOut(auth); localStorage.removeItem('accessToken')}}>Sign Out</button> :
                        <Link to="/login" className="btn bg-gray-500 text-white uppercase font-bold ml-2">Login</Link>
                    }
                    
                </div>
                <div className="navbar-end hidden lg:flex lg:mr-10">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Nav;