import Head from 'next/head';
import Layout from '../../components/Layout';
import styles from '../../styles/login-security.module.css';

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
                    <li><a href="/main-account/main-account-page">Main Account</a></li>
                    <li> \ </li>
                    <li>Login & Security</li>
                </ul>
            </div>
            <div class={styles.endWS}></div>

            <div class={styles.space}></div>
            <div class={styles.mainLayout}>
                <div class={styles.login}>
                    <h1>Login & Security</h1>
                </div>

                <div class={styles.myform}>
                    <div class={styles.formgroup}>
                        <label>Name: </label>
                                
                        <input class={styles.button} type="submit" value="Edit" name=""></input>
                                
                    </div>
                    <div class={styles.formgroup}>
                        <label>Email: </label>
                                
                        <input class={styles.button} type="submit" value="Edit" name=""></input>
                    </div>
                    <div class={styles.formgroup}>
                        <label>Primary Moblie Number: </label>
                            
                        <input class={styles.button} type="submit" value="Edit" name=""></input>
                    </div>
                    <div class={styles.formgroup}>
                        <label>Password: </label>
                                
                        <input class={styles.button} type="submit" value="Edit" name=""></input>
                    </div>
                </div>
            </div>
            <div class={styles.space}></div>


            </Layout>

        </>
    )
}