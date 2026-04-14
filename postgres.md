# PostgreSQL Quick Guide

## Introduction

PostgreSQL (often called Postgres) is an open-source relational database management system (RDBMS) known for reliability, extensibility, and SQL compliance.

---



### Windows

Download from: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

---

## Basic Commands


---

## Database Operations

### Create Database

```sql
CREATE DATABASE mydb;
```

### List Databases

```sql
\l
```

### Connect to Database

```sql
\c mydb
```

### Drop Database

```sql
DROP DATABASE mydb;
```

---

## Table Operations

### Create Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Insert Data

```sql
INSERT INTO users (name, email)
VALUES ('John Doe', 'john@example.com');
```

### Query Data

```sql
SELECT * FROM users;
```

### Update Data

```sql
UPDATE users
SET name = 'Jane Doe'
WHERE id = 1;
```

### Delete Data

```sql
DELETE FROM users WHERE id = 1;
```

---

## Indexes

### Create Index

```sql
CREATE INDEX idx_users_email ON users(email);
```

---

## Users & Permissions

### Create User

```sql
CREATE USER myuser WITH PASSWORD 'mypassword';
```

### Grant Privileges

```sql
GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
```

---

## Backup & Restore

### Backup

```bash
pg_dump mydb > mydb.sql
```

### Restore

```bash
psql mydb < mydb.sql
```

---

## Useful Tips

* Use `\dt` to list tables
* Use `\d table_name` to describe a table
* Use `EXPLAIN` to analyze queries

