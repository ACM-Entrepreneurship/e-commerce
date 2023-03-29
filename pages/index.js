import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { gql, useQuery } from '@apollo/client'
import { Product } from '@prisma/client'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const AllProductsQuery = gql`
    query allProductsQuery($first: Int, $after: ID) {
        products(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    name
                    description
                    url
                    imageUrl
                    category
                    manufacturer
                    price
                }
            }
        }
    }
`;

export default function Home() {

  const { data, loading, error, fetchMore } = useQuery(AllProductsQuery, { variables: { first: 10},});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { endCursor, hasNextPage } = data.products.pageInfo;

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
            {data?.products.edges.map(({ node }) =>(
              <Link href="#" class={styles.productlinks}>
                <div class={styles.productcard} key={node.id}>
                  <div class={styles.productimage}>
                    <img src={node.imageUrl} class={styles.productthumb} height={250} width={250} alt="" />
                    <button class={styles.cardbtn}>add to wishlist</button>
                  </div>
                  <div class={styles.productinfo}>
                    <h2 class={styles.productbrand}>{node.manufacturer}</h2>
                    <p class={styles.productshortdescription}>{node.description}</p>
                    <span class={styles.price}>${node.price}</span>
                  </div>   
                </div>
              </Link>
            ))}
            </div>
        </section>

        <div class={styles.adcontainer}>
          <div class={styles.oneadbanner}>
          <Link href="#" class={styles.adlink}>
              <div>This </div>
              <div>displays</div>
              <div> an </div>
              <div> ad </div>
              <div> banner </div>
            </Link>
          </div>
        </div>

        <section class={styles.product}>
          <button  class={styles.prebtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("secondproductcontainer").scrollLeft -= 500}}/></button>
          <button  class={styles.nxtbtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("secondproductcontainer").scrollLeft += 500}}/></button>
            <div class={styles.productcontainer} id='secondproductcontainer'>
            {data?.products.edges.map(({ node }) =>(
              <Link href="#" class={styles.productlinks}>
                <div class={styles.productcard} key={node.id}>
                  <div class={styles.productimage}>
                    <img src={node.imageUrl} class={styles.productthumb} height={250} width={250} alt="" />
                    <button class={styles.cardbtn}>add to wishlist</button>
                  </div>
                  <div class={styles.productinfo}>
                    <h2 class={styles.productbrand}>{node.manufacturer}</h2>
                    <p class={styles.productshortdescription}>{node.description}</p>
                    <span class={styles.price}>${node.price}</span>
                  </div>   
                </div>
              </Link>
            ))}
            </div>
        </section>

        <section class={styles.product}>
          <button  class={styles.prebtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("thirdproductcontainer").scrollLeft -= 500}}/></button>
          <button  class={styles.nxtbtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("thirdproductcontainer").scrollLeft += 500}}/></button>
            <div class={styles.productcontainer} id='thirdproductcontainer'>
            {data?.products.edges.map(({ node }) =>(
              <Link href="#" class={styles.productlinks}>
                <div class={styles.productcard} key={node.id}>
                  <div class={styles.productimage}>
                    <img src={node.imageUrl} class={styles.productthumb} height={250} width={250} alt="" />
                    <button class={styles.cardbtn}>add to wishlist</button>
                  </div>
                  <div class={styles.productinfo}>
                    <h2 class={styles.productbrand}>{node.manufacturer}</h2>
                    <p class={styles.productshortdescription}>{node.description}</p>
                    <span class={styles.price}>${node.price}</span>
                  </div>   
                </div>
              </Link>
            ))}
            </div>
        </section>

        <div class={styles.adcontainer}>
          <div class={styles.halfadbanner}>
            <Link href="#" class={styles.adlink}>
              <div>This </div>
              <div>displays</div>
              <div> an </div>
              <div> ad </div>
              <div> banner </div>
            </Link>
          </div>
          <div class={styles.halfadbanner}>
            <Link href="#" class={styles.adlink}>
              <div>This </div>
              <div>displays</div>
              <div> an </div>
              <div> ad </div>
              <div> banner </div>
            </Link>
          </div>
        </div>

        <section class={styles.product}>
          <button  class={styles.prebtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("fourthproductcontainer").scrollLeft -= 500}}/></button>
          <button  class={styles.nxtbtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("fourthproductcontainer").scrollLeft += 500}}/></button>
            <div class={styles.productcontainer} id='fourthproductcontainer'>
            {data?.products.edges.map(({ node }) =>(
              <Link href="#" class={styles.productlinks}>
                <div class={styles.productcard} key={node.id}>
                  <div class={styles.productimage}>
                    <img src={node.imageUrl} class={styles.productthumb} height={250} width={250} alt="" />
                    <button class={styles.cardbtn}>add to wishlist</button>
                  </div>
                  <div class={styles.productinfo}>
                    <h2 class={styles.productbrand}>{node.manufacturer}</h2>
                    <p class={styles.productshortdescription}>{node.description}</p>
                    <span class={styles.price}>${node.price}</span>
                  </div>   
                </div>
              </Link>
            ))}
            </div>
        </section>
        
      </div>
      </Layout>
    </>
  )
}
