/*
  Warnings:

  - Added the required column `end` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
