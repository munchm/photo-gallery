DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

\c carousel;

CREATE TABLE IF NOT EXISTS users (
  id             serial,
  first_name     varchar(15) NOT NULL,
  last_name      varchar(20) NOT NULL,
  reviews        int NOT NULL DEFAULT 0,
  friends        int NOT NULL DEFAULT 0,
  avatar_url    text,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS restaurants (
   id            serial,
   restaurant_name   text NOT NULL,
   reviews       int NOT NULL DEFAULT 0,
   address_full       text NOT NULL,
   phone_number  text NOT NULL,
   website_url       text NOT NULL,
   cuisine       varchar(20) NOT NULL,
   menu_url         text NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id             serial,
  created_at     text NOT NULL DEFAULT Now(),
  users_id       int NOT NULL,
  restaurant_id  int  NOT NULL,
  photo_url      text  NOT NULL,
  caption        text,
  rating         int  NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS photo_ratings (
  id           serial,
  users_id     int NOT NULL,
  photo_id     int NOT NULL,
  helpful       bool,
  PRIMARY KEY(id)
);

CREATE INDEX ratings_idx ON photos (restaurant_id, users_id,
rating DESC);

CREATE INDEX rated_idx ON photo_ratings (
  users_id, photo_id);

COPY users FROM './postgres/csvDataFiles/users1.csv' DELIMITER ',' CSV HEADER;
-- COPY users FROM './postgres/csvDataFiles/users2.csv' DELIMITER ',' CSV HEADER;
-- COPY restaurants FROM './postgres/csvDataFiles/restaurants1.csv' DELIMITER ',' CSV HEADER;
-- COPY restaurants FROM './postgres/csvDataFiles/restaurants2.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos1.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos2.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos3.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos4.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos5.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos6.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos7.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos8.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos9.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos10.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos11.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos12.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos13.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos14.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos15.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos16.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos17.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos18.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos19.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos20.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos21.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos22.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos23.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos24.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos25.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos26.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos27.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos28.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos29.csv' DELIMITER ',' CSV HEADER;
-- COPY photos FROM './postgres/csvDataFiles/photos30.csv' DELIMITER ',' CSV HEADER;
-- COPY photo_ratings FROM './postgres/csvDataFiles/photoRatings1.csv' DELIMITER ',' CSV HEADER;
-- COPY photo_ratings FROM './postgres/csvDataFiles/photoRatings2.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE photos
ADD CONSTRAINT fk_users
    FOREIGN KEY(users_id)
      REFERENCES users(id)
      ON DELETE CASCADE
      not VALID;

ALTER TABLE photos
ADD CONSTRAINT fk_restaurants
    FOREIGN KEY(restaurant_id)
     REFERENCES restaurants(id)
     ON DELETE CASCADE
     not VALID;

ALTER TABLE photo_ratings
ADD CONSTRAINT fk_user
    FOREIGN KEY(users_id)
     REFERENCES users(id)
     ON DELETE CASCADE
     not VALID;

ALTER TABLE photo_ratings
ADD CONSTRAINT fk_photo
    FOREIGN KEY(photo_id)
     REFERENCES photos(id)
     ON DELETE CASCADE
     not VALID;



/*
command to run file ====> psql postgres < database/postgres/tester.sql
*/