-- Drop the table if it exists
DROP TABLE IF EXISTS INVENTORY;

-- Recreate the table with increased length for TITLE and ISBN
CREATE TABLE INVENTORY (
    ENTRY_ID SERIAL PRIMARY KEY,
    TITLE VARCHAR(100) NOT NULL, 
    AUTHOR VARCHAR(50) NOT NULL,
    GENRE VARCHAR(30),
    PUBLICATION_DATE DATE,
    ISBN VARCHAR(30) UNIQUE,  
    STOCK INT DEFAULT 0
);

INSERT INTO INVENTORY (TITLE, AUTHOR, GENRE, PUBLICATION_DATE, ISBN, STOCK) 
VALUES 
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', '1925-04-10', '9780743273565', 15),
('Tender is the Night', 'F. Scott Fitzgerald', 'Fiction', '1934-04-12', '9780684801544', 12),
('1984', 'George Orwell', 'Dystopian', '1949-06-08', '9780451524935', 30),
('Animal Farm', 'George Orwell', 'Satire', '1945-08-17', '9780451526342', 25),
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', '1960-07-11', '9780060935467', 20),
('Pride and Prejudice', 'Jane Austen', 'Romance', '1813-01-28', '9781503290563', 25),
('Sense and Sensibility', 'Jane Austen', 'Romance', '1811-10-30', '9780141439662', 22),
('Emma', 'Jane Austen', 'Fiction', '1815-12-23', '9781503290204', 20),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '1937-09-21', '9780547928227', 5),
('The Fellowship of the Ring', 'J.R.R. Tolkien', 'Fantasy', '1954-07-29', '9780261103573', 10),
('The Adventures of Huckleberry Finn', 'Mark Twain', 'Adventure', '1884-12-10', '9780486280615', 8),
('Brave New World', 'Aldous Huxley', 'Science Fiction', '1932-08-18', '9780060850524', 18),
('A Tale of Two Cities', 'Charles Dickens', 'Historical Fiction', '1859-04-30', '9780141439600', 20),
('The Old Man and the Sea', 'Ernest Hemingway', 'Fiction', '1952-09-01', '9780684801223', 10),
('The Road', 'Cormac McCarthy', 'Post-apocalyptic', '2006-09-26', '9780307387899', 22),
('Crime and Punishment', 'Fyodor Dostoevsky', 'Philosophical Fiction', '1866-01-01', '9780140449136', 12),
('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Magical Realism', '1967-06-05', '9780060883287', 14),
('The Shining', 'Stephen King', 'Horror', '1977-01-28', '9780307743657', 25);
