
// 1.
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../lib/prisma";
import RelayPlugin from '@pothos/plugin-relay';
import { createContext } from "./context";

// 2. 
export const builder = new SchemaBuilder<{
  // 3. 
  PrismaTypes: PrismaTypes,
  Context: ReturnType<typeof createContext>, // added for authentication
}>({
  // 4.
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  }
})
 
// 5. 
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

// builder.mutationType({}) // add this for authentication - creating products (follow tutorial for more)