-- psql -d myDataBase -a -f myInsertFile.sql

-- Create database
-- CREATE DATABASE <database_name>;
CREATE DATABASE my_db;

-- Create table
-- CREATE TABLE <table_name>(<column1_name> <column1_type> <column1_constraint>, <column2_name> <column2_type> <column2_constraint>);
CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT NOT NULL);

-- Create in table
-- INSERT INTO <table_name>(<column1_name>, <column2_name>) VALUES(<column1_value>, <column2_value>);
INSERT INTO users(name) VALUES('Fred');

-- Read table
-- SELECT * FROM <table_name>
SELECT * FROM users;

-- Update table
-- UPDATE <table_name> SET <column_name>=<column_value> WHERE <condition>
UPDATE users SET name = 'Freddie' WHERE name='Fred';

-- Delete in table
-- DELETE FROM <table_name> WHERE <condition>
-- DELETE FROM users WHERE name='Freddie'

-- -- Delete table
-- -- DROP TABLE <table_name>;
-- DROP TABLE users;

-- -- Delete database
-- -- DROP DATABASE <database_name>;
-- DROP DATABASE my_db;
