DROP KEYSPACE photogallery;
CREATE KEYSPACE photoGallery WITH replication = {'class':
  'SimpleStrategy', 'replication_factor': 1};
USE photogallery;
CREATE TABLE photoGallery.photos_by_rating (
 id uuid,
 created_at timestamp,
 user_first_name text,
 user_last_name text,
 restaurant_id int,
 photo_url text,
 caption text,
 rating int,
 user_reviews int,
 user_friends int,
 avatar_url text,
 photo_id int,
 PRIMARY KEY ((restaurant_id), rating, created_at, id));
CREATE TABLE photoGallery.photos_rated_by_user (
  photo_id int,
  user_id int,
  restaurant_id int,
  helpful boolean,
  id uuid,
  PRIMARY KEY((user_id), photo_id, helpful, id)
);