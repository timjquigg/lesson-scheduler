-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_studentId_fkey";

-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
