BEGIN;

INSERT INTO "game" (
  "id",
  "date",
  "organisator_id"
) VALUES 
(1, '2016-01-01', 1),
(2, '2022-03-30', 2),
(3, '2020-10-16', 3);

COMMIT;