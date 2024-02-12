DROP TABLE IF EXISTS GAME_TAG;
DROP TABLE IF EXISTS TAG;
DROP TABLE IF EXISTS PICTURE;
DROP TABLE IF EXISTS SLEEVE;
DROP TABLE IF EXISTS GAME;

DROP SEQUENCE IF EXISTS game_id_seq;
DROP SEQUENCE IF EXISTS tag_id_seq;
DROP SEQUENCE IF EXISTS sleeve_id_seq;
DROP SEQUENCE IF EXISTS picture_id_seq;

CREATE TABLE IF NOT EXISTS game (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  base_game_id INT DEFAULT NULL, 
  status VARCHAR(30),
  purchase_location VARCHAR(50),
  original_price NUMERIC,
  current_price NUMERIC,
  min_players INT,
  max_players INT,
  uses_sleeve BOOLEAN DEFAULT FALSE,
  silica_gel_indicator BOOLEAN DEFAULT FALSE,
  rafael_played_indicator BOOLEAN DEFAULT FALSE,
  sabrina_played_indicator BOOLEAN DEFAULT FALSE,
  -- pictures
  -- sleeves
  -- expansion ids
  -- tags
  CONSTRAINT fk_base_game FOREIGN KEY (base_game_id) REFERENCES game(id)
);

CREATE TABLE IF NOT EXISTS tag (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS game_tag (
  game_id INT,
  tag_id INT,
  PRIMARY KEY (game_id, tag_id),
  CONSTRAINT fk_game_tag_game FOREIGN KEY (game_id) REFERENCES game(id),
  CONSTRAINT fk_game_tag_tag FOREIGN KEY (tag_id) REFERENCES tag(id)
);

CREATE TABLE IF NOT EXISTS picture (
  id SERIAL PRIMARY KEY,
  url VARCHAR(500) NOT NULL,
  game_id INT,
  CONSTRAINT fk_game_picture FOREIGN KEY (game_id) REFERENCES game(id)
);

CREATE TABLE IF NOT EXISTS sleeve (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(30),
  name VARCHAR(30),
  size VARCHAR(20),
  quantity INT,
  game_id INT DEFAULT NULL,  -- Nullable, representing the game the sleeve set is used in
  in_use BOOLEAN DEFAULT FALSE,  -- New column to indicate whether the sleeves are used
  CONSTRAINT fk_game FOREIGN KEY (game_id) REFERENCES game(id)
);

CREATE SEQUENCE IF NOT EXISTS game_id_seq START 1;
CREATE SEQUENCE IF NOT EXISTS tag_id_seq START 1;
CREATE SEQUENCE IF NOT EXISTS sleeve_id_seq START 1;
CREATE SEQUENCE IF NOT EXISTS picture_id_seq START 1;

ALTER TABLE game ALTER COLUMN id SET DEFAULT nextval('game_id_seq');
ALTER TABLE tag ALTER COLUMN id SET DEFAULT nextval('tag_id_seq');
ALTER TABLE sleeve ALTER COLUMN id SET DEFAULT nextval('sleeve_id_seq');
ALTER TABLE picture ALTER COLUMN id SET DEFAULT nextval('picture_id_seq');

COMMIT;
