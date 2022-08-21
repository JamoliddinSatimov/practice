DROP TABLE IF EXISTS books;

CREATE TABLE books(
    id serial not null PRIMARY KEY,
    title varchar(64) not null,
    price INTEGER not null,
    date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books(title, price) 
VALUES('Qorqma', 65000),
('Otgan kunlar', 85000),
('Shum bola', 75000),
('Shaytanat', 200000),
('Ikki eshik orasi', 80000),
('Savdogarlar ustozi', 60000),
('Solihlar gulshani', 50000),
('Diqqat', 90000),
('Xamsa', 110000);