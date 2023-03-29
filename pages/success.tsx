import Layout from "../components/Layout"
import type { NextApiRequest, NextApiResponse } from 'next';

export default
function success(req: NextApiRequest, res: NextApiResponse) {
    // TODO
    return (
        <Layout>
            Payment Succeeded
        </Layout>
    )
}

