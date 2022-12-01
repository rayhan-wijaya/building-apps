-- CreateTable
CREATE TABLE "RegisterResponse" (
    "id" UUID NOT NULL,
    "fullName" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "job" TEXT,
    "address" TEXT NOT NULL,

    CONSTRAINT "RegisterResponse_pkey" PRIMARY KEY ("id")
);
