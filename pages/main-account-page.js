import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/your-account.module.css';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function MainAccountPage(){
    return (
        <>
        <Layout>
            <Head>
            <title>MinerWarehouse - main account</title>
            <meta name="description" content="E-commerce" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                  
            <div class={styles.user_info_layout}>
                <br/>
                <h1>Your Account</h1>
                <br/> 
                <div>
                    <button class={styles.btn}>Your Orders</button>
                    <button class={styles.btn}>Login & Security</button>
                    <button class={styles.btn}>Payment Methods</button>
                </div>
            </div>
            <div class={styles.whitespace}></div>
                
        </Layout>
        </>
    )
}