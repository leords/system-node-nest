-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "occupation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL DEFAULT true,
    "occupationId" INTEGER NOT NULL,
    CONSTRAINT "employee_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "occupation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL DEFAULT true,
    "employeeId" INTEGER NOT NULL,
    CONSTRAINT "client_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL DEFAULT true,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "seller" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "item" (
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
    CONSTRAINT "item_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" REAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,
    "employeeSaleId" INTEGER NOT NULL,
    "chargeId" INTEGER,
    CONSTRAINT "bag_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bag_employeeSaleId_fkey" FOREIGN KEY ("employeeSaleId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bag_chargeId_fkey" FOREIGN KEY ("chargeId") REFERENCES "charge" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amout" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "bagId" INTEGER NOT NULL,
    CONSTRAINT "sale_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sale_bagId_fkey" FOREIGN KEY ("bagId") REFERENCES "bag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "delivery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "release" BOOLEAN NOT NULL DEFAULT true,
    "employeeDeliveryId" INTEGER NOT NULL,
    CONSTRAINT "delivery_employeeDeliveryId_fkey" FOREIGN KEY ("employeeDeliveryId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "charge" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "release" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "deliveryId" INTEGER,
    CONSTRAINT "charge_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "delivery" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_cpf_key" ON "employee"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "client_cnpj_key" ON "client"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "provider_cnpj_key" ON "provider"("cnpj");
