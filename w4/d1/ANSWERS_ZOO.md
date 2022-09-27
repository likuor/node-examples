# SQL Zoo

## Exercise 1

1.

```sql
SELECT name FROM world
  WHERE name LIKE 'Y%'
```

2.

```sql
SELECT name FROM world
  WHERE name LIKE '%y'
```

3.

```sql
SELECT name FROM world
  WHERE name LIKE '%x%'
```

4.

```sql
SELECT name FROM world
  WHERE name LIKE '%land'
```

5.

```sql
SELECT name FROM world
WHERE name LIKE 'C%'
AND name LIKE '%ia'
```

6.

```sql
SELECT name FROM world
WHERE name LIKE '%oo%'
```

7. Find the countries that have three or more a in the name.

```sql
SELECT name FROM world
WHERE name LIKE '%a%a%a%';
```

8.

```sql
SELECT name FROM world
 WHERE name LIKE '_t%'
ORDER BY name
```

9.

```sql
SELECT name FROM world
 WHERE name LIKE '%o__o%'
```

10.

```sql
SELECT name FROM world
 WHERE name LIKE '____';
```

11.

```sql
SELECT name
FROM world
WHERE name = capital
```

12.

```sql
SELECT name
  FROM world
 WHERE capital = concat(name, ' City')
```

13.

```sql
SELECT capital, name
  FROM world
 WHERE capital LIKE concat('%', name, '%')
```

14.

```sql
SELECT capital, name
FROM world
WHERE capital LIKE concat('%', name, '%')
AND capital > name;
```

15.

```sql
SELECT name, REPLACE(capital, name, '') AS extension
FROM world
WHERE capital LIKE concat('%', name, '%')
AND capital > name;
```

## Exercise 2

1.

```sql
SELECT name, continent, population FROM world
```

2.

```sql
SELECT name FROM world
WHERE population >= 200000000
```

3.

```sql
SELECT name, (gdp/population) AS per_capita_gdp FROM world
WHERE population >= 200000000
```

4.

```sql
SELECT name, (population/1000000) AS population_millions
FROM world
WHERE continent = 'South America'
```

5.

```sql
SELECT name, population FROM world
WHERE name IN ('France', 'Germany', 'Italy')
```

6.

```sql
SELECT name FROM world
WHERE name LIKE '%United%'
```

7.

```sql
SELECT name, population, area
FROM world
WHERE area > 3000000
OR population > 250000000
```

8.

```sql
SELECT name, population, area
FROM world
WHERE (area > 3000000 AND population < 250000000)
OR (population > 250000000 AND area < 3000000);
```

9.

```sql
SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2)
FROM world
WHERE continent = 'South America';
```

10.

```sql
SELECT name, ROUND(gdp/population, -3) AS gdp_per_capita
FROM world
WHERE gdp > 1000000000000
```

11. ?

```sql
SELECT name, capital
FROM world
WHERE LEN(name) = LEN(capital);
```

12.

```sql
SELECT name, capital
FROM world
WHERE LEFT(name,1) = LEFT(capital,1)
AND name <> capital
```

13.

```sql
SELECT name
   FROM world
WHERE name LIKE '%a%'
AND name LIKE '%e%'
AND name LIKE '%i%'
AND name LIKE '%o%'
AND name LIKE '%u%'
AND name NOT LIKE '% %'
```

## Exercise 3

1.

```sql
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950;
```

2.

```sql
SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'Literature';
```

3.

```sql
SELECT yr, subject FROM nobel WHERE winner = 'Albert Einstein';
```

4.

```sql
SELECT winner FROM nobel WHERE subject = 'Peace' AND yr >= 2000;
```

5.

```sql
SELECT * FROM nobel WHERE subject = 'Literature' AND yr >= 1980 AND yr <= 1989;
```

6.

```sql
SELECT * FROM nobel
 WHERE winner IN ('Theodore Roosevelt',
                  'Woodrow Wilson',
                  'Jimmy Carter',
                  'Barack Obama');
```

7.

```sql
SELECT winner FROM nobel WHERE winner LIKE 'John%';
```

8.

```sql
SELECT * FROM nobel WHERE subject = 'Physics' AND yr = 1980 OR subject = 'Chemistry' AND yr = 1984;
```

9.

```sql
SELECT * FROM nobel WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine');
```

10.

```sql
SELECT * FROM nobel WHERE subject = 'Medicine' AND yr < 1910 OR subject = 'Literature' AND yr >= 2004;
```

11.

```sql
SELECT * FROM nobel WHERE winner = 'Peter Grünberg';
```

12.

```sql
SELECT * FROM nobel WHERE winner = 'Eugene O''Neill';
```

13.

```sql
Select winner, yr, subject FROM nobel WHERE winner LIKE 'Sir%' ORDER BY yr DESC, winner;
```

14.

```sql
SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY
CASE
WHEN subject IN('Physics','Chemistry') THEN 1
ELSE 0
END
,subject,winner;
```

## Exercise 5

2.

```sql
SELECT DISTINCT continent FROM world;
```

3.

```sql
SELECT SUM(gdp) FROM world WHERE continent = 'Africa';
```

4.

```sql
SELECT COUNT(*) FROM world WHERE area >= 1000000;
```

5.

```sql
SELECT SUM(population) FROM world WHERE name IN ('Estonia','Latvia','Lithuania');
```

6.

```sql
SELECT continent, COUNT(*) FROM world GROUP BY continent;
```

7.

```sql
SELECT continent, COUNT(*) FROM world WHERE population >= 10000000 GROUP BY continent;
```

8.

```sql
SELECT continent FROM world x WHERE (SELECT SUM(population) FROM world y WHERE x.continent = y.continent) >= 100000000 GROUP BY continent;
```
