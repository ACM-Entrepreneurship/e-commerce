import Link from 'next/link'
import Image from 'next/image'
//import openSideNav from "components/Sidenavbar"
import { useUser } from '@auth0/nextjs-auth0/client';
const openSideNav = () => {
    return (
        (document.getElementById("close-burger").style.marginLeft = "260px")
        && (document.getElementById("nav-side-menu").style.left = "0")
     );
 }

 const closeSideNav = () => {
    return (
        (document.getElementById("nav-side-menu").style.left = "-250px")
        && (document.getElementById("close-burger").style.marginLeft = "-50px")
     );
 }

const Navbar = () => {

    const {user} = useUser(); // Pull from login context
    const profile_image = user ? user.picture : '/signin-icon.png'

    let login = user ?  (<a href="/api/auth/logout?returnTo=/">Logout</a>) : (<a href='/api/auth/login'>Login</a>)

    return (
    <nav>
        <div className='nav-belt'>
            <div className='site-logo'>
                <Image src='/site-logo.png' alt='site logo' width={140} height={120} />
            </div>
            <div className='close-burger' id='close-burger' onClick={()=>closeSideNav()}>
                <span></span>
                <span></span>
            </div>
            <div className='nav-belt-button'>
                <ul>
                    <li>
                        <div className='navbar-search'>
                            <ul>
                                <li>
                                    <form action=''>
                                        <input type='text' name='main-bar-search' placeholder='search' />
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='nav-signin'>
                            <a href="/profile">
                                <img src={profile_image} alt='main signin icon' width={30} height={30} />
                            </a>

                            { login }
                        </div>
                    </li>
                    <li>
                        <div className='nav-cart'>
                            <a href='/shoppingCart'>
                                <Image src='/shopping-cart.png' alt='main shopping cart icon' width={60} height={60} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='nav-main'>
                <div className='nav-main-option'>
                    <ul>
                        <li>
                            <div className='burger' onClick={()=>openSideNav()}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li><a href='/'>ALL</a></li>
                        <li><a href='/'>ACM-E</a></li>
                        <li><a href='/'>NSBE</a></li>
                        <li><a href='/'>SHPE</a></li>
                    </ul>
                </div>
        </div>
        <div id='nav-side-menu' className='nav-side-menu'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Category</a></li>
                <li><a href="/">All vendors</a></li>
                <li><a href="/">Best sellers</a></li>
                <li><a href="/">Deals</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
        
    </nav>
  );
}

export default Navbar;