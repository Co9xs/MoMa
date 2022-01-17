/*
  Warnings:

  - Added the required column `month` to the `CreditCardStatement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `CreditCardStatement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreditCardStatement" ADD COLUMN     "month" "Month" NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
