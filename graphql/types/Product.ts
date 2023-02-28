import { builder } from "../builder";

builder.prismaObject('Product', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    url: t.exposeString('url'),
    category: t.exposeString('category'),
    manufacturer: t.exposeString('manufacturer'),
  })
})

builder.queryField("products", (t) =>
  t.prismaField({
    type: ['Product'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.product.findMany({ ...query })
  })
)