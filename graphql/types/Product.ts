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