/* 1. see lfp3_.sql
 * 2. sqlite3
 * 3. .open lfp3.db
 * 4. .read lfp3_create.sql */

CREATE TABLE lfp3 
(
  a_num integer primary key,
  b_link text,
  c_title text,
  d_dateUK varchar(300),
  e_dateISO varchar(300),
  f_image text,
  g_alt varchar(300),
  h_desc text,
  i_page text
);
