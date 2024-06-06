import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
    await prisma.book.create({
        data: {
            title: 'book 2',
            ISBN: 234234,
            author: {
                create: {
                    name: 'Dorothy Ren',
                    biography: 'this is my bio'
                },
            },
            Member: {
                create: {
                    name: 'David R',
                    email: 'david@david.com',
                    address: 'davids address',
                },
            }
        }
    }
    )


    const allBooks = await prisma.book.findMany()
    console.dir(allBooks)
}


main()