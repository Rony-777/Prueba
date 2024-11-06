\c postgres
DROP DATABASE If EXISTS aire;
CREATE DATABASE aire;
\c aire

CREATE TABLE datos(
    id serial NOT NULL,
    co2 real ,
    temp real ,
    fecha TIMESTAMP DEFAULT NOW() ,
    PRIMARY KEY (id)
);

