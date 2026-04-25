-- CreateTable
CREATE TABLE "room_enviroments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperature" REAL NOT NULL,
    "humidity" REAL NOT NULL,
    "pressure" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "enviroments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperature" REAL NOT NULL,
    "humidity" REAL NOT NULL,
    "pressure" REAL NOT NULL
);
