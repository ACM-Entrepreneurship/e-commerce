import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { gql, useQuery } from '@apollo/client'
import { Product } from '@prisma/client'

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
                <div class={styles.productcard} key={node.id}>
                  <div class={styles.productimage}>
                    <img src={node.imageUrl} class={styles.productthumb} height={450} width={450} alt="" />
                    <button class={styles.cardbtn}>add to wishlist</button>
                  </div>
                  <div class={styles.productinfo}>
                    <h2 class={styles.productbrand}>{node.manufacturer}</h2>
                    <p class={styles.productshortdescription}>{node.description}</p>
                    <span class={styles.price}>${node.price}</span>
                  </div>   
                </div>
              ))}
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
