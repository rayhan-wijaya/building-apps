/*
  Warnings:

  - Added the required column `education` to the `RegisterResponse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `RegisterResponse` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "RegisterResponse" ADD COLUMN     "education" TEXT NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL;
