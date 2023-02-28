import { builder } from "../builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true, }),
    image: t.exposeString('image', { nullable: true, }),
    fName: t.exposeString('fName', { nullable: true, }),
    lName: t.exposeString('lName', { nullable: true, }),
    username: t.exposeString('username', { nullable: true, }),
    password: t.exposeString('password', { nullable: true, }),
    role: t.expose('role', { type: Role, }),
  })
})

const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN', 'VENDOR'] as const,
})