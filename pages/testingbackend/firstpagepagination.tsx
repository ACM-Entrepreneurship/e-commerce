// displaying data with pagination feature
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import type { Product } from '@prisma/client'

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

export default function firstpagefx() {
    const { data, loading, error, fetchMore } = useQuery(AllProductsQuery, { variables: { first: 2},});

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    const { endCursor, hasNextPage } = data.products.pageInfo;

    return (
        <div>
            <Head>
                <title>Testing</title>
            </Head>
            <div>
                <ul>
                    {data?.products.edges.map(({ node }: { node: Product }) =>(
                        <li key={node.id}>
                            <img src={node.imageUrl} height={200} width={200} />
                            <div>
                                <p>{node.category}</p>
                                <p>{node.name}</p>
                                <p>{node.description}</p>
                                <p>{node.manufacturer}</p>
                                <p>{node.price}</p>
                                <a href={node.url}>
                                    {node.url.replace(/(^\w+:|^)\/\//, '')}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {hasNextPage ? (
                <button onClick={() => {
                    fetchMore({
                        variables: { after: endCursor },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                            fetchMoreResult.products.edges = [
                                ...prevResult.products.edges,
                                ...fetchMoreResult.products.edges,
                            ];
                            return fetchMoreResult;
                        },
                    });
                }}
                >
                    more
                </button>
            ) : (
                <p>You've reached the end!{" "}</p>
            )}
        </div>
    );
}
