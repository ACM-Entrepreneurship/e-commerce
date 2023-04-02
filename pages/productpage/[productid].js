import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../../styles/template-product-page.module.css';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import prisma  from '../../lib/prisma';
 

export async function getServerSideProps(context) {
    const {productid} = context.query;
    const product = await prisma.product.findUnique({
        where: {
            id : productid,
        },
    });
    const uniqueproduct = JSON.parse(JSON.stringify(product))
    const products = await prisma.product.findMany({
        where: {
            category : uniqueproduct.category,
        },
    });
    return {
        props: {
            uniqueproduct,
            prodByCategory: JSON.parse(JSON.stringify(products)),
        }
    }
}


export default function ProductPage(props){
    const router = useRouter();
    const uniqueproduct = props.uniqueproduct;
    const id = uniqueproduct.id;
    const imageUrl = uniqueproduct.imageUrl;
    const category = uniqueproduct.category;
    const name = uniqueproduct.name;
    const description = uniqueproduct.description;
    const manufacturer = uniqueproduct.manufacturer;
    const price = uniqueproduct.price;

    const data = props.prodByCategory;



    return (
        <>
        <Layout>
        <Head>
        <title>MinerWarehouse - Product Template</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div class={styles.bodydiv}>
            <div class={styles.row1}>
                <div class={styles.column_1}>
                    <ul class={styles.productImages}>
                        <li class={styles.Image} key="">Image 1</li>
                        <li class={styles.Image} key="">Image 2</li>
                        <li class={styles.Image} key="">Image 3</li>
                    </ul>
                </div>
                <div class={styles.column_2}>
                    <img src={imageUrl} class={styles.productthumb} height={350} width={350} alt="" />
                </div>
                <div class={styles.column_3}>
                    <h1 id={styles.prodTitle}>{name}</h1>
                    <div class={styles.topBorderLine}></div>
                    <h1 class={styles.prodPrice}>${price}</h1>
                    <div class={styles.prodInfoLayout}>
                        <h3>Product Description: </h3>
                        <ul class={styles.productDescipList}>
                            <li class={styles.productInfoPt} key="">Name: {name}</li>
                            <li class={styles.productInfoPt} key="">Description: {description}</li>
                            <li class={styles.productInfoPt} key="">Manufacturer: {manufacturer}</li>
                            <li class={styles.productInfoPt} key="">Category: {category}</li>
                        </ul>
                    </div>
                    <div class={styles.topBorderLine2}></div>
                </div>
                <div class={styles.column_4}>
                    <h1 class={styles.prodPrice}>${price}</h1>
                    <h3 class={styles.stockInfo}>In stock</h3>
                    <button class={styles.cartBtn}>ADD TO CART</button>
                    <button class={styles.buyBtn}>BUY NOW</button>
                </div>
                <div class={styles.clr}></div>
            </div>


            
            <div class={styles.productInfo}>
                <h1>Product Information</h1>
                <ul>
                    <li key="">Product Dimension: </li>
                    <li key="">Item Weight: </li>
                    <li key="">ACM-E SIN: </li>
                    <li key="">Item Model Number: </li>
                    <li key="">Manufacturer: </li>
                    <li key="">Customer Reviews: </li>
                    <li key="">Date First Available: </li>
                </ul>
            </div>

            <section class={styles.product}>
                <button  class={styles.prebtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("firstproductcontainer").scrollLeft -= 500}}/></button>
                <button  class={styles.nxtbtn}><Image src="/arrow.png" width={20} height={30} alt="" onClick={() => {document.getElementById("firstproductcontainer").scrollLeft += 500}}/></button>
                    <div class={styles.productcontainer} id='firstproductcontainer'>
                    {data?.slice(0,10).map((node) =>(
                        <Link href={"/productpage/" + node.id} class={styles.productlinks}>
                            <div class={styles.productcard} key={node.id}>
                                <div class={styles.productimage}>
                                    <img src={node.imageUrl} class={styles.productimage} height={150} width={150} alt="" />
                                </div>
                                <div class={styles.productinfo}>
                                    <h2 class={styles.productname}>{node.name}</h2>
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