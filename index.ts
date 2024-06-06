import { PrismaClient } from '@prisma/client'
import { title } from 'process'


const prisma = new PrismaClient()

async function main(title: string, ISBN: number, name: string, biography: string) {

    await prisma.book.create({
        data: {
            title: title,
            ISBN: ISBN,
            author: {
                create: {
                    name: name,
                    biography: biography,
                },
            },
        }
    }
    )


    const allBooks = await prisma.book.findMany()
    console.dir(allBooks)

    const allAuthors = await prisma.author.findMany()
    console.dir(allAuthors)
}

main('Old Yeller', 789789, 'Heather', 'bio god')


const NewBook = [
    {
        title: 'new book 3',
        ISBN: 234234,
    }
]

async function createNewBook(title: string, ISBN: number) {
    // BONUS: lookup the ISBN and make sure it doesn't exist already:

    const book = await prisma.book.create({
        data: {
            title: title,
            ISBN: ISBN
        }
    })

    const allBooks = await prisma.book.findMany()
    console.dir(allBooks)
}

createNewBook('Sarah Bio', 800000)
