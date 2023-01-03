-- CreateTable
CREATE TABLE "Loan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "amount" INTEGER NOT NULL,
    "loanIdEmployee" INTEGER NOT NULL,
    "loanIdClient" INTEGER NOT NULL,
    CONSTRAINT "Loan_loanIdEmployee_fkey" FOREIGN KEY ("loanIdEmployee") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_loanIdClient_fkey" FOREIGN KEY ("loanIdClient") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bottle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "loanId" INTEGER,
    CONSTRAINT "Bottle_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
