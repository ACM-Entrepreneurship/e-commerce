import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../../styles/shopping-cart.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function ShoppingCartPage(){
    return (
        <>
        <Layout>
        <Head>
        <title>MinerWarehouse - shopping cart</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
                  
            <div class={styles.cart_layout}>
                <br/>
                <h1 class={styles.shoppingcarttext}>Shopping Cart</h1>
                <h3 class={styles.itemLink}>Deselect all items</h3>
                <h4 class={styles.priceAlign}>Price</h4>
                <div class={styles.topBorderLine}></div>
                <h2 class={styles.emptyCartText}>Your cart is empty.</h2>
                <div class={styles.cart_btm_layout}>
                    <div class={styles.topBorderLine}></div>
                    <h3 class={styles.cart_layout_Subtotal_p}>Subtotal:</h3>
                    <h2 class={styles.cart_layout_Subtotal_p}>$0.00</h2>
                </div>

                        
            </div>
            <div class={styles.priceSideBar}>
                <h2 class={styles.totalSideBar}>Subtotal (0 items):</h2>
                <h1 class={styles.totalPriceSB}>$0.00</h1>
                <a href="/product-order/checkout-page">
                    <button id={styles.checkoutBtn}>Proceed To Checkout</button>
                </a>
            </div>
            <div class={styles.whitespace}></div>
                
        </Layout>
        </>
    )
}