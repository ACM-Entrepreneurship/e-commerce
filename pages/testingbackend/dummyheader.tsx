import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client'

const Header = () => {
    const { user } = useUser()
    return (
        <header>
            <div>
                <nav>
                    { user ? (
                        <div>
                            <Link href="/api/auth/logout">
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <Link href="/api/auth/login">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header