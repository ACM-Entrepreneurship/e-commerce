import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/sign-in.module.css';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CreateAccoutPage(){
    return (
        <>
        <Head>
        <title>MinerWarehouse - Create Account</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link class={styles.pic} rel = "icon" href= "/minerwarehouse_logo.png"/>
        <link rel = "icon" href= "/minerwarehouse_logo.png"/>
        </Head>
        <div class={styles.pic}>
            <a href="/">
                <Image src='/minerwarehouse_logo.png' alt='site logo' width={140} height={120} />
            </a>
        </div>

        <div class={styles.center}>
            <h1>Create Account</h1>
            <br/>
            <form action="" method="">
                <div>
                    <input type ="text" name="firstName" placeholder="First Name"></input>
                </div>
                <br/>
                <div>
                    <input type ="text" name="lastName" placeholder="Last Name"></input>
                </div>
                <br/>
                <div>
                    <input type ="text" name="email" placeholder="Email Address"></input>
                </div>
                <br/>
                <div>
                    <input type ="text" name="phoneNum" placeholder="Phone Number (optional?)"></input>
                </div>
                <br/>
                <div>
                    <input type ="text" name="password" placeholder="Password"></input>
                </div>
            </form>
            <br/>
            <h6>By creating an account, you agree to ACM-E's Privacy Notice and Terms of Use</h6>
            <br/>
            <button class={styles.btn}>SIGN UP</button>
            <br/>
            <br/>
            <h3>Have an Account? <Link class={styles.signin} href="/sign-in">Sign In</Link></h3>           
        </div>
        </>
    )
}