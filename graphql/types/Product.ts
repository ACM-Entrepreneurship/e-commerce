import { builder } from "../builder";

builder.prismaObject('Product', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    url: t.exposeString('url'),
    imageUrl: t.exposeString('imageUrl'),
    category: t.exposeString('category'),
    manufacturer: t.exposeString('manufacturer'),
    price: t.exposeFloat('price'),
  })
})

builder.queryField("products", (t) =>
  t.prismaConnection({
    type: 'Product',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.product.findMany({ ...query })
  })
)

/*
Without pagination feature, use the following code

import { builder } from "../builder";

builder.prismaObject('Product', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    url: t.exposeString('url'),
    image: t.exposeString('image'),
    category: t.exposeString('category'),
    manufacturer: t.exposeString('manufacturer'),
  })
})
// image: t.exposeString('image') is causing an error here, but is working with graphQL query, still needs to find a way to update. I deleted imageUrl and changed it to image

builder.queryField("products", (t) =>
  t.prismaField({
    type: ['Product'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.product.findMany({ ...query })
  })
)
*/

/*
// adding possibility of creating new products. I could this to allow only logged in users to perform some actions on products. Replace all link(s) by product(s)
builder.mutationField("createLink", (t) =>
  t.prismaField({
    type: 'Link',
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      url: t.arg.string({ required: true }),
      imageUrl: t.arg.string({ required: true }),
      category: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description, url, imageUrl, category } = args

      if (!(await ctx).user) {
        throw new Error("You have to be logged in to perform this action")
      }

      return prisma.link.create({
        ...query,
        data: {
          title,
          description,
          url,
          imageUrl,
          category,
        }
      })
    }
  })
)
*/