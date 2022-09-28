# Exercises

# Relational queries in SQL

## Bobby's Hobbies

```sql
-- Part 1
INSERT INTO persons (name, age) VALUES ('Arthur', 31);

INSERT INTO hobbies (person_id, name) VALUES (6, "running");

-- Part 2
SELECT persons.name, hobbies.name
FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id

-- Part 3
SELECT persons.name, hobbies.name
FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id
WHERE persons.name = 'Bobby McBobbyFace';
```

## Customer's orders

```sql
-- Part 1
SELECT customers.name, customers.email, orders.item, orders.price
FROM customers
LEFT OUTER JOIN orders
ON customers.id = orders.customer_id;

-- Part 2
SELECT customers.name, customers.email, SUM(orders.price) AS total_amount
FROM customers
LEFT OUTER JOIN orders
ON customers.id = orders.customer_id
GROUP BY customers.name
ORDER BY total_amount DESC;
```

## Sequels in SQL

```sql
SELECT movies.title, sequels.title AS sequel_title
FROM movies
LEFT OUTER JOIN movies sequels
ON movies.sequel_id = sequels.id
ORDER BY movies.id;
```

## Friendbook

```sql
-- Part 1
SELECT persons.fullname, hobbies.name FROM persons
JOIN hobbies
ON persons.id = hobbies.person_id;

-- Part 2
SELECT a.fullname AS person1_fullname, b.fullname AS person2_fullname FROM friends
JOIN persons a
ON friends.person1_id = a.id
JOIN persons b
ON
friends.person2_id = b.id;
```

# Modifying databases with SQL

## Dynamic Documents

```sql
-- Part 1
UPDATE documents
SET author = 'Jackie Draper'
WHERE author = 'Jackie Paper';

SELECT * FROM documents;

-- Part 2
DELETE FROM documents
WHERE title = "Things I'm Afraid Of";

SELECT * FROM documents;
```

## Clothing alterations

```sql
-- Part 1
ALTER TABLE clothes
ADD price INTEGER;

SELECT * FROM clothes;

-- Part 2
UPDATE clothes
SET price = 10
WHERE id = 1;

UPDATE clothes
SET price = 20
WHERE id = 2;

UPDATE clothes
SET price = 30
WHERE id = 3;

SELECT * FROM clothes;

-- Part 3
INSERT INTO clothes (type, design, price)
VALUES ("shoes", "sneaker", 40);

SELECT * FROM clothes;
```
