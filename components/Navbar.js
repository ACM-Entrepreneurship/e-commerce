import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
  return (
      <nav>
        <div className='nav-belt'>
            <div className='site-logo'>
                <Image src='/site-logo.png' alt='site logo' width={140} height={120} />
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
                            <Image src='/signin-icon.png' alt='main signin icon' width={30} height={30} />
                            <a href='/'>Welcome<br />Sign in/Sign up</a>
                        </div>
                    </li>
                    <li>
                        <div className='nav-cart'>
                            <a href='/'>
                                <Image src='/shopping-cart.png' alt='main shopping cart icon' width={60} height={60} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  );
}

export default Navbar;