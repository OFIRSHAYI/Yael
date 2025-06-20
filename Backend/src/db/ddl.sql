DROP SCHEMA IF EXISTS yael CASCADE;

CREATE SCHEMA yael;

CREATE TABLE yael.plans (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    is_done BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO yael.plans (title)
VALUES  ('לראות את המונדיאל'),
        ('לסיים השיר שלנו'),
        ('לראות את מסי בלייב')
