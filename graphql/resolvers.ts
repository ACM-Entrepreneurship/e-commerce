import prisma from '../lib/prisma'
export const resolvers = {
  Query: {
    products: () => {
      return prisma.product.findMany()
    },
  },
}

/*
export const resolvers = {
  Query: {
    products: () => {
      return [
        {
          id: 1,
          name: 'Next.js',
          description: 'Fullstack React framework',
          url: 'https://nextjs.org',
          imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
          category: 'Open Source',
          manufacturer: 'nintendo',
        },
        {
          id: 2,
          name: 'Prisma',
          description: 'Next Generation ORM for TypeScript and JavaScript',
          url: 'https://www.prisma.io',
          imageUrl: 'https://www.prisma.io/images/og-image.png',
          category: 'Open Source',
          manufacturer: 'nintendo',
        },
        {
          id: 3,
          name: 'Apollo GraphQL',
          description: 'GraphQL implementation',
          url: 'https://apollographql.com',
          imageUrl: 'https://www.apollographql.com/apollo-home.jpg',
          category: 'Open Source',
          manufacturer: 'amazon',
        },
      ]
    },
  },
}
*/