import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/sign-in.module.css';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function SignInPage(){
    return (
        <>
        <Head>
        <title>MinerWarehouse - Sign In</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel = "icon" href= "/minerwarehouse_logo.png"/>
        </Head>
        <div class={styles.pic}>
            <a href="/">
                <Image src='/minerwarehouse_logo.png' alt='site logo' width={140} height={120} />
            </a>
        </div>
        <div class={styles.center}>
                <h1>Sign In</h1>
                <br/>
                <form action="" method="">
                    <div>
                        <input type ="text" name="email" placeholder="Email Address"></input>
                    </div>
                    <br/>
                    <div>
                        <input type ="text" name="password" placeholder="Password"></input>
                    </div>
                </form>
                <br/>
                <button class={styles.btn}>SIGN IN</button>
        </div>
        </>
    )
}