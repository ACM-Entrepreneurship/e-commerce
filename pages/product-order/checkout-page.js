import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../../styles/checkout.module.css';
import Link from 'next/link';
import { AiOutlineLock} from 'react-icons/ai';
export default function CheckOutPage(){
    return (
        <>
        <Head>
        <title>MinerWarehouse - shopping cart</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div class={styles.header}>
            <div class={styles.pic}>
                <a href="/">
                    <Image src='/minerwarehouse_logo.png' alt='site logo' width={140} height={120} />
                </a>
            </div>
            <h1>Checkout</h1>
            <div class={styles.lock}>
                <AiOutlineLock size={80}/>
            </div>
        </div>
        <div class={styles.clr}></div>

        <div class={styles.leftCol}>
            <div class={styles.container}>
                <h2>1. Shipping Address</h2>
                <p>person info</p>

            </div>
            <div class={styles.container}>
                <h2>2. Payment Method</h2>
                <p>person card</p>
            </div>
            <div class={styles.container}>
                <h2>3. Review Items and Shipping</h2>
            </div>
        </div>
        <div class={styles.rightCol}>
            <button class={styles.checkoutBtn}>PLACE YOUR ORDER</button>
            <h6>By placing your order, you agree to ACM-E's Privacy Notice and Terms of Use</h6>
            <div class={styles.box1}>
                <h2>Order Summary</h2>
                <ul>
                    <li>Items: </li>
                    <li>Shipping & handling: </li>
                    <li>Total before tax: </li>
                    <li>Estimated tax to be collected: </li>
                </ul>
            </div>
            <div class={styles.box2}>
                <h2>Order Total:</h2>
            </div>

        </div>
        <div class={styles.clr}></div>
        <div class={styles.whitespace}></div>
               
        </>
    )
}