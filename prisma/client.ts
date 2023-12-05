import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  export default prisma




//   import { PrismaClient } from '@prisma/client'

// declare global{
//   namespace NodeJS{
//     interface Global{}
//   }
// }
// interface CustomNodeJSGlobal extends NodeJS.Global{
//   prisma: PrismaClient
// }
// declare const global: CustomNodeJSGlobal
// const prisma = global.prisma || new PrismaClient()

// if(process.env.NODE_ENV === "development") global.prisma = prisma

//   export default prisma