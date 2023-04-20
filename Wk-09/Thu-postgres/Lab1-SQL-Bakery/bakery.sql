-- Create a database "bakery"
-- CREATE DATABASE bakery;

-- Create a table "cakes" with columns for "id" (the primary key), "flavour", "has_icing", and "price"
CREATE TABLE cakes (
    id SERIAL PRIMARY KEY,
    flavour TEXT,
    has_icing BOOLEAN,
    price FLOAT
);

-- Insert 5 cakes into the table
INSERT INTO cakes(flavour, has_icing, price) VALUES ('Blueberry Cheesecake', true, 5.50);
INSERT INTO cakes(flavour, has_icing, price) VALUES ('Lemon Meringue Cake', true, 4.75);
INSERT INTO cakes(flavour, has_icing, price) VALUES ('Tiramisu Cake', true, 6.25);
INSERT INTO cakes(flavour, has_icing, price) VALUES ('Chocolate Chip Cake', false, 4.00);
INSERT INTO cakes(flavour, has_icing, price) VALUES ('Strawberry Shortcake', true, 5.50);

-- Update the first cake to be black forest with icing
UPDATE cakes SET flavour='Black Forest' WHERE id=1;

-- Delete the 3rd cake
DELETE FROM cakes WHERE id=3;

-- Read all the records that have a price less than a given amount
SELECT * FROM cakes WHERE price < 5;

