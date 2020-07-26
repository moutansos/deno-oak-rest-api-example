CREATE TABLE IF NOT EXISTS "DoughnutPipelineDb"."FrostingFlavors"
(
	"Id" SERIAL NOT NULL PRIMARY KEY,
	"Name" VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS  "DoughnutPipelineDb"."FillingFlavors"
(
  "Id" SERIAL NOT NULL PRIMARY KEY,
  "Name" VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS "DoughnutPipelineDb"."DoughnutType"
(
  "Id" SERIAL NOT NULL PRIMARY KEY,
  "Name" VARCHAR(50) NOT NULL,
  "FrostingFlavor" INT REFERENCES "DoughnutPipelineDb"."FrostingFlavors"("Id"),
  "FillingFlavor" INT REFERENCES "DoughnutPipelineDb"."FillingFlavors"("Id")
);