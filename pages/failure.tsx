import React from "react"
import Layout from "../components/Layout"
import type { NextApiRequest, NextApiResponse } from 'next';

export default
function failure(req: NextApiRequest, res: NextApiResponse) {
    // TODO
    return (
        <Layout>
            Payment Failed
        </Layout>
    )
}