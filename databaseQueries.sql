-- Create a table:

CREATE TABLE players (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar (30) NOT NULL,
  type varchar(30) NOT NULL,
  last_name varchar(40)
);

-- Inserting players

INSERT INTO players
  (first_name, type, last_name)
VALUES
  ('Kuba', 'Human', 'Chicken' ),
  ('Matthias', 'Human', 'Fis' ),
  ('Awina', 'Human', 'We'),
  ('Theo', 'Human', 'Berserk'),
  ('Klay', 'Human', 'Thompson');

-- Get all players
SELECT * FROM animals;
