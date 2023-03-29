import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/login-security.module.css';

export default function loginSecurityPage(){
    return  (
        <>
            <Layout>
            <Head>
                <title>MinerWarehouse - Login & Security</title>
                <meta name="description" content="E-commerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div class={styles.nav}>
                <ul>
                    <li><a href="/main-account-page">Main Account</a></li>
                    <li> \ </li>
                    <li>Login & Security</li>
                </ul>
            </div>
            <div class={styles.endWS}></div>

            </Layout>

        </>
    )
}