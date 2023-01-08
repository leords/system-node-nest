/*
  Warnings:

  - You are about to drop the column `providerId` on the `Stock` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL
);
INSERT INTO "new_Stock" ("amount", "date", "id", "type") SELECT "amount", "date", "id", "type" FROM "Stock";
DROP TABLE "Stock";
ALTER TABLE "new_Stock" RENAME TO "Stock";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
