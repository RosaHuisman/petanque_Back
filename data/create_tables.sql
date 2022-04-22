BEGIN;

DROP TABLE IF EXISTS 
"user",
"game";

-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" serial PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "firstname" text NULL,
  "lastname" text NULL
);

-- -----------------------------------------------------
-- Table "game"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "game" (
  "id" serial PRIMARY KEY,
  "date" date NOT NULL,
  "file_id" integer NOT NULL
);

-- -----------------------------------------------------
-- Table "file"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "file" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "path" text NOT NULL
);

COMMIT;