
import { builder } from "./builder";

export const schema = builder.toSchema()


/*export const typeDefs = `
    type Product {
        id: ID
        name: String
        description: String
        url: String
        imageUrl: String
        category: String
        manufacturer: String
    }
    
    type Query {
        products: [Product]!
    }
`
*/
