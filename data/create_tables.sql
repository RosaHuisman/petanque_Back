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
  "lastname" text NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

-- -----------------------------------------------------
-- Table "game"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "game" (
  "id" serial PRIMARY KEY,
  "date" date NOT NULL,
  "file_id" integer NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

-- -----------------------------------------------------
-- Table "file"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "file" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "path" text NOT NULL,
  "game_id" integer NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

COMMIT;