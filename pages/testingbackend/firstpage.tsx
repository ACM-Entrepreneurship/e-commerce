// displaying database data without pagination feature
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import type { Product } from '@prisma/client'

const AllProductsQuery = gql`
    query {
        products {
            id
            name
            description
            url
            image
            category
            manufacturer
        }
    }
`

export default function firstpagefx() {
    const { data, loading, error } = useQuery(AllProductsQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>
    return (
        <div>
            <Head>
                <title>Testing</title>
            </Head>
            <div>
                <ul>
                    {data.products.map((product: Product) =>(
                        <li key={product.id}>
                            <img src={product.image} />
                            <div>
                                <p>{product.category}</p>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.manufacturer}</p>
                                <a href={product.url}>
                                    {product.url.replace(/(^\w+:|^)\/\//, '')}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}