import { useRouter } from 'next/router'
import prisma from '../../lib/prisma'
import { gql, useQuery } from '@apollo/client'


function ProductPage(props) {
    const router = useRouter();
    
    const uniqueproduct = props.uniqueproduct;
    
    return (
        <div>
            <ul>
                <li key={uniqueproduct.id}>
                    <img src={uniqueproduct.imageUrl} />
                    <div>
                        <p>{uniqueproduct.category}</p>
                        <p>{uniqueproduct.name}</p>
                        <p>{uniqueproduct.description}</p>
                        <p>{uniqueproduct.manufacturer}</p>
                        <p>{uniqueproduct.price}</p>
                        <a href={uniqueproduct.url}>
                            {uniqueproduct.url.replace(/(^\w+:|^)\/\//, '')}
                        </a>
                    </div>
                </li>     
            </ul>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {productid} = context.query;
    const product = await prisma.product.findUnique({
        where: {
            id : productid,
        },
    });
    return {
        props: {
            uniqueproduct: JSON.parse(JSON.stringify(product)),
        }
    }
}

export default ProductPage;