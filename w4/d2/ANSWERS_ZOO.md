# SQL ZOO

## Exercise 6

1.

```sql
SELECT matchid, player FROM goal
  WHERE teamid = 'GER'
```

2.

```sql
SELECT id,stadium,team1,team2
  FROM game
WHERE id = 1012;
```

3.

```sql
SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
WHERE teamid = 'GER'
```

4.

```sql
SELECT team1,team2, player
  FROM game JOIN goal ON (id=matchid)
WHERE player LIKE 'Mario%'
```

5.

```sql
SELECT player, teamid, coach, gtime
  FROM goal
JOIN eteam on teamid=id
 WHERE gtime<=10
```

6.

```sql
SELECT mdate, teamname FROM game
JOIN eteam ON team1 = eteam.id
WHERE coach = 'Fernando Santos'
```

7.

```sql
SELECT player FROM goal
JOIN game
ON matchid = game.id
WHERE stadium = 'National Stadium, Warsaw'
```

8.

```sql
SELECT player
FROM game
JOIN goal
ON matchid = id
WHERE (team1='GER' OR team2='GER')
AND goal.teamid <> 'GER'
GROUP BY player
```

9.

```sql
SELECT teamname, COUNT(*) AS total_goals
FROM eteam
JOIN goal ON id=teamid
GROUP BY teamname
ORDER BY total_goals DESC
```

10.

```sql
SELECT stadium, COUNT(*) AS total_goals
FROM game
JOIN goal
ON id = matchid
GROUP BY stadium
```

11.

```sql
LECT matchid, mdate, COUNT(*) AS goals_scored
FROM game JOIN goal ON matchid = id
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid, mdate;
```

12.

```sql
SELECT matchid, mdate, COUNT(*) AS goals_by_GER
FROM goal
JOIN game
ON matchid = id
WHERE teamid = 'GER'
GROUP BY matchid, mdate;
```

13.

```sql
SELECT DISTINCT mdate, team1,
SUM(CASE WHEN teamid=team1 THEN 1 ELSE 0 END) score1,
team2,
SUM(CASE WHEN teamid=team2 THEN 1 ELSE 0 END) score2
FROM game
LEFT JOIN goal ON game.id = goal.matchid
GROUP BY id, mdate, team1, team2, matchid
```

## Exercise 7

1.

```sql
SELECT id, title
 FROM movie
 WHERE yr=1962
```

2.

```sql
SELECT yr FROM movie
WHERE title = 'Citizen Kane'
```

3.

```sql
SELECT id, title, yr FROM movie
WHERE title LIKE '%Star Trek%'
ORDER BY yr
```

4.

```sql
SELECT id FROM actor WHERE name = 'Glenn Close';
```

5.

```sql
SELECT id FROM movie WHERE title = 'Casablanca'
```

6.

```sql
SELECT name
FROM actor
JOIN casting
ON actorid = actor.id
WHERE movieid= 27
```

7.

```sql
SELECT name FROM casting
JOIN actor ON (actor.id=actorid)
JOIN movie ON (movie.id=movieid)
WHERE title = 'Alien'
```

8.

```sql
SELECT title
FROM actor
JOIN casting ON actorid = actor.id
JOIN movie ON movieid = movie.id
WHERE actor.name = 'Harrison Ford'
```

9.

```sql
SELECT title
FROM actor
JOIN casting ON actorid = actor.id
JOIN movie ON movieid = movie.id
WHERE actor.name = 'Harrison Ford'
AND ord <> 1;
```

10.

```sql
SELECT title, actor.name
FROM movie
JOIN casting ON movieid = movie.id
JOIN actor ON actorid = actor.id
WHERE yr = 1962
AND ord = 1;
```

11.

```sql
SELECT yr,COUNT(title) FROM
  movie JOIN casting ON movie.id=movieid
        JOIN actor   ON actorid=actor.id
WHERE name='Rock Hudson'
GROUP BY yr
HAVING COUNT(title) > 2
```

12.

```sql
SELECT title, name FROM casting
  JOIN movie ON movie.id = movieid
  JOIN actor ON actor.id = actorid
WHERE ord = 1
	AND movie.id IN
	(SELECT movie.id FROM movie
	   JOIN casting ON movie.id = movieid
	   JOIN actor ON actor.id = actorid
           WHERE actor.name = 'Julie Andrews')
```

13.

```sql
SELECT actor.name FROM casting
JOIN actor ON actorid = actor.id
WHERE ord = 1
GROUP BY actor.name
HAVING COUNT(actor.id) > 14
ORDER BY actor.name
```

14.

```sql
SELECT title, COUNT(movieid) FROM movie
JOIN casting ON movieid = movie.id
WHERE yr = 1978
GROUP BY title
ORDER BY COUNT(movieid) DESC, title
```

15.

```sql
SELECT DISTINCT actor.name FROM casting
JOIN actor ON actorid = actor.id
WHERE movieid
IN (SELECT movieid FROM actor
JOIN casting ON actorid = actor.id
JOIN movie ON movieid = movie.id
WHERE actor.name = 'Art Garfunkel')
AND actor.name <> 'Art Garfunkel'
```
