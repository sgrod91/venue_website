CREATE TABLE shows (
  id serial PRIMARY KEY,
  artist_name text,
  artist_image text,
  bio text,
  artist_website text,
  date text,
  set_times text,
  underage_show boolean,
  ticket_price integer
);

CREATE TABLE mailing_list (
  id serial PRIMARY KEY,
  email text
)

CREATE TABLE gig_requests (
  id serial PRIMARY KEY,
  artist_name text,
  artist_website text,
  bio text,
  email text,
  phone text
)
