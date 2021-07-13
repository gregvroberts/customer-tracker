-- Creation of Customers table
CREATE TABLE "Customers" (
  "id" bigserial PRIMARY KEY,
  "first_name" varchar(50),
  "last_name" varchar(50),
  "email" varchar(128),
  "address" varchar(100),
  "city" varchar(85),
  "state" varchar(13),
  "zip" varchar(5)
);

COMMENT ON COLUMN "Customers"."id" IS 'the primary key';

COMMENT ON COLUMN "Customers"."first_name" IS '50 length becasue the longest out of millions was 46';

COMMENT ON COLUMN "Customers"."last_name" IS 'length similar to first name';

COMMENT ON COLUMN "Customers"."email" IS 'Out of millions of customers, the longest was 64. This is to be safe';

COMMENT ON COLUMN "Customers"."address" IS 'Longest in the united states is 95 characters long';

COMMENT ON COLUMN "Customers"."city" IS 'The longest city name in the world is 85';

COMMENT ON COLUMN "Customers"."state" IS 'Minus Rhode island full state name, the longest is 13';

COMMENT ON COLUMN "Customers"."zip" IS 'Only need 5. No ranges here just a single code';
