/*
  Warnings:

  - You are about to drop the column `amout` on the `sale` table. All the data in the column will be lost.
  - Added the required column `amount` to the `sale` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,
    CONSTRAINT "Stock_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "priceBurden" REAL NOT NULL,
    "priceUnity" REAL NOT NULL,
    "amountBurden" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "milliliter" REAL NOT NULL,
    "milliliterBale" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "providerId" INTEGER NOT NULL,
    "stockId" INTEGER,
    CONSTRAINT "item_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "item_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_item" ("amountBurden", "category", "createdAt", "id", "milliliter", "milliliterBale", "name", "priceBurden", "priceUnity", "providerId") SELECT "amountBurden", "category", "createdAt", "id", "milliliter", "milliliterBale", "name", "priceBurden", "priceUnity", "providerId" FROM "item";
DROP TABLE "item";
ALTER TABLE "new_item" RENAME TO "item";
CREATE TABLE "new_Loan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "loanIdEmployee" INTEGER NOT NULL,
    "loanIdClient" INTEGER NOT NULL,
    CONSTRAINT "Loan_loanIdEmployee_fkey" FOREIGN KEY ("loanIdEmployee") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_loanIdClient_fkey" FOREIGN KEY ("loanIdClient") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Loan" ("amount", "id", "loanIdClient", "loanIdEmployee", "status") SELECT "amount", "id", "loanIdClient", "loanIdEmployee", "status" FROM "Loan";
DROP TABLE "Loan";
ALTER TABLE "new_Loan" RENAME TO "Loan";
CREATE TABLE "new_sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "bagId" INTEGER NOT NULL,
    CONSTRAINT "sale_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sale_bagId_fkey" FOREIGN KEY ("bagId") REFERENCES "bag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sale" ("bagId", "id", "itemId", "total") SELECT "bagId", "id", "itemId", "total" FROM "sale";
DROP TABLE "sale";
ALTER TABLE "new_sale" RENAME TO "sale";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
