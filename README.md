# Deno Oak REST API Example
An example of a REST API using deno, oak, and postgres

How to run:
``` bash
deno run --allow-net ./main.ts
```

How to start postgres (via docker):
``` bash
docker run --name local-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```