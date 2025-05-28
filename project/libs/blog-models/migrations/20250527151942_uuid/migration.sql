-- CreateTable
CREATE TABLE "VideoPost" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "VideoPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TextPost" (
    "id" TEXT NOT NULL,
    "announcement" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "TextPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuotePost" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "QuotePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkPost" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "LinkPost_pkey" PRIMARY KEY ("id")
);
