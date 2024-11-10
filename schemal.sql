CREATE DATABASE note_app
USE note_app

CREATE TABLE notes {
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW()
}

INSERT INTO notes (title , contents) 
VALUES 
('my first note', 'lorem ipsum for first note')
('my second note', 'lorem ipsum for second note')