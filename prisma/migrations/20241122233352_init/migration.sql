/*
  Warnings:

  - You are about to alter the column `genero` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `genero` VARCHAR(191) NOT NULL;
