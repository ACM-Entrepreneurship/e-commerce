/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `cardNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cvv` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nameOnCard` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `User` table. All the data in the column will be lost.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_cardNumber_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cardNumber",
DROP COLUMN "cvv",
DROP COLUMN "expDate",
DROP COLUMN "nameOnCard",
DROP COLUMN "review";
