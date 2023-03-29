import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/your-orders.module.css';

export default function yourOrdersPage(){
    return  (
        <>
            <Layout>
            <Head>
                <title>MinerWarehouse - Your Orders</title>
                <meta name="description" content="E-commerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div class={styles.nav}>
                <ul>
                    <li><a href="/main-account-page">Main Account</a></li>
                    <li> \ </li>
                    <li>Your Orders</li>
                </ul>
            </div>
            <div class={styles.mainLayout}>
                <h1 class={styles.orderTitle}>Your Orders</h1>
                <div class={styles.btnLayout}>
                    <ul>
                        <li><button>Current Orders</button></li>
                        <li><button>Past Orders</button></li>
                    </ul>
                </div>
                <div class={styles.orderLayout}>
                    <h2 class={styles.subTitle}>Orders</h2>
                    <ul>
                        <li>No orders</li>
                    </ul>
                </div>
            </div>
            <div class={styles.endWS}></div>

            </Layout>

        </>
    )
}