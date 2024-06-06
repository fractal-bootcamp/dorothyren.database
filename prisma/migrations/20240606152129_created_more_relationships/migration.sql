/*
  Warnings:

  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `memberId` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_memberId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "memberId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
