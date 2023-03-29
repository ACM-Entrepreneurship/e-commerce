import Stripe from "stripe"
import type { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.STRIPE_PRIVATE_KEY
const API_HOST = process.env.API_HOST

const stripe = new Stripe(SECRET);

export default
async function createCheckoutSession(req: NextApiRequest, res: NextApiResponse) {
    /**
     * TODO 
     * 1. Get Cart Information
     * 2. Shipping Information -- https://stripe.com/docs/payments/checkout/shipping
     */  
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
        success_url: API_HOST + '/payment-success',
        cancel_url: API_HOST + '/payment-failure'
    })

    return res.status(303).redirect(session.url)
}