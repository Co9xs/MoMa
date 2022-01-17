/*
  Warnings:

  - Added the required column `month` to the `AccountStatement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `AccountStatement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Month" AS ENUM ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

-- AlterTable
ALTER TABLE "AccountStatement" ADD COLUMN     "month" "Month" NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
