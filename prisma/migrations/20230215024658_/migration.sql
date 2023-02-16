/*
  Warnings:

  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cardNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `manufacturer` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "title",
ADD COLUMN     "manufacturer" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Testing" ADD COLUMN     "place_holder" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cardNumber" BIGINT NOT NULL,
ADD COLUMN     "cvv" INTEGER,
ADD COLUMN     "expDate" TEXT,
ADD COLUMN     "fName" TEXT NOT NULL,
ADD COLUMN     "lName" TEXT NOT NULL,
ADD COLUMN     "nameOnCard" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "review" TEXT[],
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_cardNumber_key" ON "User"("cardNumber");
