/*
  Warnings:

  - Made the column `nome` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `nome` VARCHAR(191) NOT NULL,
    MODIFY `tmb` DOUBLE NULL;
