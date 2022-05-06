BEGIN;

DROP TABLE IF EXISTS 
"organisator",
"game",
"player";

-- -----------------------------------------------------
-- Table "organisator"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "organisator" (
  "id" serial PRIMARY KEY,
  "firstname" text NULL,
  "lastname" text NULL,
  "password" text NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

-- -----------------------------------------------------
-- Table "game"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "game" (
  "id" serial PRIMARY KEY,
  "date" date NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now(),
  "organisator_id" integer NOT NULL
);

-- -----------------------------------------------------
-- Table "player"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "player" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "winRounds" text,
  "pointsRound1" integer NOT NULL,
  "pointsRound2" integer NOT NULL,
  "pointsRound3" integer NOT NULL,
  "scoreRound1" integer NOT NULL,
  "scoreRound2" integer NOT NULL,
  "scoreRound3" integer NOT NULL,
  "totalPoints" integer NOT NULL,
  "game_id" integer NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  "updatedAt" timestamp NOT NULL DEFAULT now()
);

COMMIT;