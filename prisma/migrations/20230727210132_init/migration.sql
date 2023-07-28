-- CreateTable
CREATE TABLE "Joaco" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,

    CONSTRAINT "Joaco_pkey" PRIMARY KEY ("id")
);
