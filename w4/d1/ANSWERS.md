# Answers

# SQL Khan Academy

## SQL Basics

### Book List Database

```sql
-- Part 1
CREATE TABLE books (id INTEGER, name TEXT, rating INTEGER);

-- Part 2
INSERT INTO books VALUES (1, "book1", 5);
INSERT INTO books VALUES (2, "book2", 4);
INSERT INTO books VALUES (3, "book3", 3);
```

### Box office hits database

```sql
-- Part 1
SELECT * FROM movies;

-- Part 2
SELECT * FROM movies
WHERE release_year > 2000
ORDER BY release_year;
```

### TODO list database stats

```sql
SELECT SUM(minutes) FROM todo_list
```

### Design a store database

```sql
CREATE TABLE cars(id INTEGER, model TEXT, make TEXT, year INTEGER, price INTEGER);
INSERT INTO cars VALUES (1,"Elantra Sedan", "Hyundai", "2020", 20000);
INSERT INTO cars VALUES (2,"Kona", "Hyundai", "2021", 20000);
INSERT INTO cars VALUES (3,"SantaFe", "Hyundai", "2022", 20000);
INSERT INTO cars VALUES (4,"Tucson", "Hyundai", "2023", 20000);
INSERT INTO cars VALUES (5,"Elantra Hatch", "Hyundai", "2019", 20000);
INSERT INTO cars VALUES (6,"Model S", "Tesla", "2020", 60000);
INSERT INTO cars VALUES (7,"Model 3", "Tesla", "2019", 30000);
INSERT INTO cars VALUES (8,"Model X", "Tesla", "2021", 80000);
INSERT INTO cars VALUES (9,"Model Y", "Tesla", "2022", 70000);
INSERT INTO cars VALUES (10,"Cybertruck", "Tesla", "2023", 100000);
INSERT INTO cars VALUES (11,"Explorer", "Ford", "2020", 40000);
INSERT INTO cars VALUES (12,"F-150", "Ford", "2021", 50000);
INSERT INTO cars VALUES (13,"Focus", "Ford", "2022", 30000);
INSERT INTO cars VALUES (14,"Mustang Mach-E", "Ford", "2023", 70000);
INSERT INTO cars VALUES (15,"Mustang", "Ford", "2019", 25000);

SELECT * FROM cars ORDER BY price;

SELECT make, COUNT(model) AS models_available, AVG(price) AS average_price FROM cars GROUP BY make;
```

## More advanced SQL queries

### Karaoke song selector

```sql
-- Part 1
SELECT title FROM songs;

-- Part 2
SELECT title FROM songs
WHERE mood = "epic"
OR released > 1990;

-- Part 3
SELECT title FROM songs
WHERE mood = "epic"
AND released > 1990
AND duration < 240;
```

### Playlist maker

```sql
-- Part 1
SELECT title FROM songs WHERE artist = "Queen";

-- Part 2
SELECT name FROM artists WHERE genre = "Pop";

-- Part 3
SELECT title FROM songs WHERE artist IN (SELECT name FROM artists WHERE genre = "Pop");
```

### The wordiest author

```sql
-- Part 1
SELECT author, SUM(words) AS total_words FROM books GROUP BY author HAVING total_words > 1000000;

-- Part 2
SELECT author, AVG(words) AS avg_words FROM books GROUP BY author HAVING avg_words > 150000;
```

### Gradebook

```sql
-- Part 1
SELECT name, number_grade, ROUND(fraction_completed * 100) AS percent_completed FROM student_grades;

-- Part 2
SELECT COUNT(*),
CASE
WHEN number_grade > 90 THEN "A"
WHEN number_grade > 80 THEN "B"
WHEN number_grade > 70 THEN "C"
ELSE "F"
END AS "letter_grade"
FROM student_grades
GROUP BY letter_grade;
```
