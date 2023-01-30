/*
  Warnings:

  - You are about to drop the column `post_code` on the `User` table. All the data in the column will be lost.
  - Added the required column `postal_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "post_code",
ADD COLUMN     "postal_code" VARCHAR(255) NOT NULL;
