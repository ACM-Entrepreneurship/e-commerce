import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/payment-methods.module.css';

export default function paymentMethodsPage(){
    return  (
        <>
            <Layout>
            <Head>
                <title>MinerWarehouse - Payment Methods</title>
                <meta name="description" content="E-commerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div class={styles.nav}>
                <ul>
                    <li><a href="/main-account-page">Main Account</a></li>
                    <li> \ </li>
                    <li>Payment Methods</li>
                </ul>
            </div>
            <div class={styles.leftLayout}>
                <h1>Wallet</h1>
                <div class={styles.cardLayout}>
                    <h2>Cards & Accounts</h2>
                    <div class={styles.borderLine}></div>
                    <ul>
                        <li>Card 1</li>
                        <li>Card 2</li>
                    </ul>
                </div>
                <div class={styles.highlightedCard}>
                    <h2>CARD 1</h2>
                </div>
                <div class={styles.clr}></div>
                <div class={styles.addCardLayout}>
                    <div class={styles.borderLine}></div>
                    <div class={styles.addCard}>
                        <h5 class={styles.addCardBorder}>+</h5>
                        <button>add a payment method</button>
                    </div>
                </div>
            </div>
            <div class={styles.endWS}></div>

            </Layout>

        </>
    )
}