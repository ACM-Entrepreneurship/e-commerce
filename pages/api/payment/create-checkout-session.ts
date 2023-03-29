import Stripe from "stripe"
import type { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.STRIPE_PRIVATE_KEY
const API_HOST = process.env.API_HOST

const stripe = new Stripe(SECRET);

export default
async function createCheckoutSession(req: NextApiRequest, res: NextApiResponse) {

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000
                },
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: API_HOST + '/api/payment/success',
        cancel_url: API_HOST + '/api/payment/failure'
    })

    return res.status(303).redirect(session.url)
}