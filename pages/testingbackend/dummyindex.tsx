import { useUser } from '@auth0/nextjs-auth0/client';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './dummyheader'


function Home() {
    const { user } = useUser();
    

    if (!user) {
        return (
            <div>
                <Layout />
                <div>
                    To view products you need to{' '}
                    <Link href="/api/auth/login">
                        Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            You are logged in
        </div>
    );
}


export default Home;