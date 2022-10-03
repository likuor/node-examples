# Results

## 01_get_students_without_github.sql

```text
 id  |       name        |             email              | class_id
-----+-------------------+--------------------------------+----------
  99 | Herminia Smitham  | sawayn.sarina@yahoo.com        |        7
 102 | Jacinthe Kautzer  | litzy_fay@hilpert.net          |        7
 111 | Bernardo Turcotte | margarita.anderson@paolo.name  |        8
 123 | Eloisa Quigley    | schmidt.ansel@gmail.com        |        9
 128 | Tiana Altenwerth  | zelda.stanton@yahoo.com        |        9
 146 | Hailie Kutch      | zora.corkery@goldner.net       |       10
 156 | Brook Fadel       | savanna.will@louisa.io         |       11
 159 | Shannon Tromp     | jayden_bahringer@hotmail.com   |       11
 160 | Aurore Yundt      |                                |       11
 163 | Kurt Turcotte     |                                |       11
 166 | Ike Lockman       | goodwin_zelda@gmail.com        |       11
 170 | Delores Gibson    | lehner_mustafa@sipes.com       |       11
 174 | Jeramie Volkman   | lucile.lynch@abbie.tv          |
 176 | Florida Turner    | marks_roman@yahoo.com          |
 177 | Darien Luettgen   | issac_collins@pink.io          |
 178 | Javonte Ward      | jessie_howell@hotmail.com      |
 183 | Marisa Rau        |                                |
 184 | Hettie Hettinger  |                                |
 188 | Holly Nitzsche    | lindsey.barrows@marcellus.info |
 192 | Jerrold Lindgren  | jabari.stoltenberg@witting.biz |
(20 rows)
```

## 02_get_students_in_class.sql

```text
using class_id = 1

 id |       name
----+-------------------
  1 | Armand Hilll
  2 | Stephanie Wolff
  3 | Stan Miller
  4 | Elliot Dickinson
  5 | Lloyd Boehm
  6 | Erna Cassin
  7 | Edison Brown
  8 | Lionel Morar
  9 | Donnie Lueilwitz
 10 | Obie Howell
 11 | Hiram Veum
 12 | Lynn Kilback
 13 | Brian Jones
 14 | Clint Cremin
 15 | Maximillia Willms
 16 | Carmel Grant
 17 | Colten Gutkowski
 18 | Pamela Runolfsson
(18 rows)
```

## 03_total_students_first_3_classes.sql

```text
  total_students
----------------
             48
(1 row)
```

## 04_students_without_email_or_phone.sql

```text
   student_name
------------------
 Aurore Yundt
 Cory Toy
 Kurt Turcotte
 Elda McClure
 Luisa Sipes
 Bertha Johnson
 Freeman Marks
 Javonte Ward
 Trace Mohr
 Ibrahim Lubowitz
 Hayden Cronin
 Marisa Rau
 Hettie Hettinger
 Nola Jerde
 Jessika Jenkins
 Jerrold Rohan
 Vivienne Larson
(17 rows)
```

## 05_students_without_gmail_and_phone.sql

```text
      name       | id  |           email           | class_id
-----------------+-----+---------------------------+----------
 Javonte Ward    | 178 | jessie_howell@hotmail.com |
 Jessika Jenkins | 187 | stephanie.koss@kevon.io   |
 Jerrold Rohan   | 189 | wehner.twila@hotmail.com  |
(3 rows)
```

## 06_get_students_enrolled.sql

```text
        name         | id  | class_id
---------------------+-----+----------
 Deon Hahn           | 151 |       11
 Sean Bartell        | 152 |       11
 Sarai Flatley       | 153 |       11
 Billie Mitchell     | 154 |       11
 Vance Kihn          | 155 |       11
 Brook Fadel         | 156 |       11
 Briana Leffler      | 157 |       11
 Santino Oberbrunner | 158 |       11
 Shannon Tromp       | 159 |       11
 Aurore Yundt        | 160 |       11
 Cory Toy            | 161 |       11
 Magali Rolfson      | 162 |       11
 Kurt Turcotte       | 163 |       11
 Elda McClure        | 164 |       11
 Tessie Wisozk       | 165 |       11
 Ike Lockman         | 166 |       11
 Bart Leuschke       | 167 |       11
 Luisa Sipes         | 168 |       11
 Jacinthe Skiles     | 169 |       11
 Delores Gibson      | 170 |       11
 Marge Padberg       | 171 |       11
 Bertha Johnson      | 172 |       11
 Hadley Corkery      | 173 |
 Jeramie Volkman     | 174 |
 Freeman Marks       | 175 |
 Florida Turner      | 176 |
 Darien Luettgen     | 177 |
 Javonte Ward        | 178 |
 Trace Mohr          | 179 |
 Eunice Morar        | 180 |
 Ibrahim Lubowitz    | 181 |
 Hayden Cronin       | 182 |
 Marisa Rau          | 183 |
 Hettie Hettinger    | 184 |
 Nola Jerde          | 185 |
 Ibrahim Schimmel    | 186 |
 Jessika Jenkins     | 187 |
 Holly Nitzsche      | 188 |
 Jerrold Rohan       | 189 |
 Fannie Hammes       | 190 |
 Vivienne Larson     | 191 |
 Jerrold Lindgren    | 192 |
(42 rows)
```

## 07_get_graduates_without_github.sql

```text
       name        |             email             |    phone
-------------------+-------------------------------+--------------
 Herminia Smitham  | sawayn.sarina@yahoo.com       | 778-251-5094
 Jacinthe Kautzer  | litzy_fay@hilpert.net         | 075-883-5570
 Bernardo Turcotte | margarita.anderson@paolo.name | 814-473-6929
 Eloisa Quigley    | schmidt.ansel@gmail.com       | 276-965-2022
 Tiana Altenwerth  | zelda.stanton@yahoo.com       | 448-872-0954
 Hailie Kutch      | zora.corkery@goldner.net      | 249-763-9998
(6 rows)
```
