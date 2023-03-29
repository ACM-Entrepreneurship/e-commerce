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

            <div class={styles.endWS}></div>

            </Layout>

        </>
    )
}