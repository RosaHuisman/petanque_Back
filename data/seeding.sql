BEGIN;

INSERT INTO "user" (
  "id",
  "email",
  "password",
  "firstname",
  "lastname"
) VALUES 
(1, 'rosa.huisman@gmail.com', 'rosa', 'Rosa', 'Huisman'),
(2, 'john@campingbeaurivage.com', 'john', 'John', 'Huisman'),
(3, 'vera@campingbeaurivage.com', 'vera', 'Vera', 'Sikkes'),
(4, 'laura@campingbeaurivage.com', 'laura', 'Laura', 'Huisman'),
(5, 'willy@campingbeaurivage.com', 'willy', 'Willy', 'Tamerti'),
(6, 'animatie@campingbeaurivage.com', 'animatie', 'Animatie', 'animatie');

INSERT INTO "game" (
    "id",
    "date",
    "file_id"
) VALUES
(1, '2018-01-01', 1),
(2, '2018-01-02', 2),
(3, '2018-01-03', 3);

INSERT INTO "file" (
    "id",
    "name",
    "path"
) VALUES
(1, 'game1', 'game1.pdf'),
(2, 'game2', 'game2.pdf'),
(3, 'game3', 'game3.pdf');