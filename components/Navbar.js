import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav>
        <div className="nav-belt">
            <div className="site-logo">
                <Image src="/site-logo.png" alt="site logo" width={140} height={120} />
            </div>
            <div className='nav-belt-button'>
                <Link href="/">Home - Search bar holder</Link>
                <Link href="/about">About - Sign in/Sign up holder</Link>
                <Link href="/about">About - Cart holder</Link>
            </div>
        </div>
        <div className="nav-main">
            <div className="nav-left">
            </div>
            <div className='nav-vendor'>
                <Link href="/">All</Link>
                <Link href="/about">ACM-E</Link>
                <Link href="/about">NSBE</Link>
                <Link href="/about">SHPE</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;