/*
  Warnings:

  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletStatement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "WalletStatement" DROP CONSTRAINT "WalletStatement_walletId_fkey";

-- DropTable
DROP TABLE "Wallet";

-- DropTable
DROP TABLE "WalletStatement";
