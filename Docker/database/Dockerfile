# syntax=docker/dockerfile:1
FROM mysql:8
ADD script.sql /docker-entrypoint-initdb.d/script.sql
RUN ls /var/lib/mysql