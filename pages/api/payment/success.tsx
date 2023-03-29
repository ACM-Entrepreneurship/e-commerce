import React from "react"
import type { NextApiRequest, NextApiResponse } from 'next';

export default
async function success(req: NextApiRequest, res: NextApiResponse) {
    // TODO
    return res.status(200).json({message: "OK"})
}