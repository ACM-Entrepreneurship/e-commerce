import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../../styles/template-product-page.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function ProductPage(){
    return (
        <>
        <Layout>
        <Head>
        <title>MinerWarehouse - Product Template</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        
            <div class={styles.row1}>
                <div class={styles.column_1}>
                    <ul class={styles.productImages}>
                        <li class={styles.Image}>Image 1</li>
                        <li class={styles.Image}>Image 2</li>
                        <li class={styles.Image}>Image 3</li>
                    </ul>
                </div>
                <div class={styles.column_2}>
                    <h1>main image</h1>
                </div>
                <div class={styles.column_3}>
                    <h1 id={styles.prodTitle}>Product Title</h1>
                    <div class={styles.topBorderLine}></div>
                    <h1 class={styles.prodPrice}>$0.00</h1>
                    <div class={styles.prodInfoLayout}>
                        <h3>Product Description: </h3>
                        <ul class={styles.productDescipList}>
                            <li class={styles.productInfoPt}>Info 1</li>
                            <li class={styles.productInfoPt}>Info 2</li>
                            <li class={styles.productInfoPt}>Info 3</li>
                        </ul>
                    </div>
                    <div class={styles.topBorderLine2}></div>
                </div>
                <div class={styles.column_4}>
                    <h1 class={styles.prodPrice}>$0.00</h1>
                    <h3 class={styles.stockInfo}>In stock</h3>
                    <button class={styles.cartBtn}>ADD TO CART</button>
                    <button class={styles.buyBtn}>BUY NOW</button>
                </div>
                <div class={styles.clr}></div>
            </div>


            
            <div class={styles.productInfo}>
                <h1>Product Information</h1>
                <ul>
                    <li>Product Dimension: </li>
                    <li>Item Weight: </li>
                    <li>ACM-E SIN: </li>
                    <li>Item Model Number: </li>
                    <li>Manufacturer: </li>
                    <li>Customer Reviews: </li>
                    <li>Date First Available: </li>
                </ul>
            </div>
        
        </Layout>
        </>
    )
}