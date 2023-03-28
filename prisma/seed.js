// prisma/seed.js

import { PrismaClient } from '@prisma/client'
//import { links } from '../data/links'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
    },
  })

  await prisma.product.createMany({
    data: {
        title: 'test',
        description: 'this is a test',
        url: 'testing/test',
        image: 'testing/image',
        category: 'testing'
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
