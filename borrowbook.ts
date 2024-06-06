import { PrismaClient } from '@prisma/client'
import { isMemberName } from 'typescript'

const prisma = new PrismaClient()

async function borrowBook(id: number, memberId: number) {
    const book = await prisma.book.update({
        where: { id: id },
        data: {
            memberId: memberId
        },
    })
    const allBooks = await prisma.book.findMany()
    console.dir(allBooks)
}

const BOOK_3_ID = 4
const MEMBER_SARAH = 2

borrowBook(BOOK_3_ID, MEMBER_SARAH)

