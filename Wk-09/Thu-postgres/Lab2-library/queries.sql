-- Get all information about all authors.
SELECT * FROM authors;

-- Get just the name and birth year of all authors.
SELECT name, birth_year
FROM authors;

-- Get all authors born in the 20th centruy or later.
SELECT * FROM authors WHERE birth_year >= 1900;

-- Get all authors born in the USA.
SELECT * FROM authors WHERE nationality = 'United States of America';

-- Get all books published on 1985.
SELECT * FROM books WHERE publication_date = 1985;

-- Get all books published before 1989.
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title FROM books;

-- Get the year that 'A Dance with Dragons' was published.
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';

-- Get all books which have "the" somewhere in their title.
-- SELECT * FROM books WHERE title ILIKE '%the %' OR title ILIKE '% the %';
SELECT * FROM books WHERE Title ~* '(^|\s)the($|\s)'; -- REGEX style
-- https://www.freecodecamp.org/news/sql-contains-string-sql-regex-example-query/

-- Add yourself as an author.
INSERT INTO authors(name, nationality, birth_year) VALUES('Alex', 'Australia', 2023);

-- Add two books that you'd like to write.
INSERT INTO books(title, publication_date, author_id) VALUES('Kill Butt', 2013, 9);
INSERT INTO books(title, publication_date, author_id) VALUES('Kill Butt 2', 2013, 9);

-- Update one of your books to have a new title.
UPDATE books SET title = 'Kill Butt 2 - II' WHERE title = 'Kill Butt 2';

-- Delete your books.
DELETE FROM books WHERE title = 'Kill Butt 2';
DELETE FROM books WHERE title = 'Kill Butt 2 - II';

-- Delete your author entry.
DELETE FROM authors WHERE name="Alex";
