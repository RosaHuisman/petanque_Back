BEGIN;

INSERT INTO "organisator" (
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


COMMIT;