-- CreateTable
CREATE TABLE "tamandua" (
    "nome" TEXT NOT NULL,
    "caracteristicay" TEXT NOT NULL,
    "alimentado" BOOLEAN NOT NULL,
    "idade" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "tamandua_pkey" PRIMARY KEY ("nome")
);
