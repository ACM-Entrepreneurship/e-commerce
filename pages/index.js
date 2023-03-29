import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <> 
      
      <Layout>
      <Head>
        <title>ACM-E E-commerce</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div class={styles.bodydiv}>
        <section class={styles.product}>
          <button  class={styles.prebtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("firstproductcontainer").scrollLeft -= 500}}/></button>
          <button  class={styles.nxtbtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("firstproductcontainer").scrollLeft += 500}}/></button>
            <div class={styles.productcontainer} id='firstproductcontainer'>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                        <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$20</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$25</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$25</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
                <div class={styles.productcard}>
                    <div class={styles.productimage}>
                      <Image src="/site-logo.png" class={styles.productthumb} width={250} height={450} alt="" />
                        <button class={styles.cardbtn}>add to wishlist</button>
                    </div>
                    <div class={styles.productinfo}>
                        <h2 class={styles.productbrand}>brand</h2>
                        <p class={styles.productshortdescription}>a short line about the cloth..</p>
                        <span class={styles.price}>$25</span><span class={styles.actualprice}>$40</span>
                    </div>
                </div>
            </div>
        </section>
        <div class={styles.productsgallery}>
          <div>s </div>
          <div>s</div>
          <div>sb</div>
        </div>
        <div>s </div>
        <div>s</div>
        <div>sb</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
      </div>
      </Layout>
    </>
  )
}
