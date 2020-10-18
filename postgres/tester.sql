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
  created_at     timestamp NOT NULL DEFAULT Now(),
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


COPY users FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/users1.csv' DELIMITER ',' CSV HEADER;
COPY users FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/users2.csv' DELIMITER ',' CSV HEADER;
COPY restaurants FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/restaurants1.csv' DELIMITER ',' CSV HEADER;
COPY restaurants FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/restaurants2.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos1.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos2.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos3.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos4.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos5.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos6.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos7.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos8.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos9.csv' DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos10.csv' DELIMITER ',' CSV HEADER;

COPY photo_ratings FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photoRatings1.csv' DELIMITER ',' CSV HEADER;
COPY photo_ratings FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photoRatings2.csv' DELIMITER ',' CSV HEADER;

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


-- COPY photos FROM '/Users/jwildermuth/hackreactor/SDC/sandbox/photos3.csv' DELIMITER ',' CSV HEADER;

/*
command to run file ====> psql postgres < database/postgres/tester.sql
*/