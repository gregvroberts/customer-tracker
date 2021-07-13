-- Creation of Customers table
CREATE TABLE "customers" (
  "id" bigserial PRIMARY KEY,
  "first_name" varchar(50),
  "last_name" varchar(50),
  "email" varchar(128),
  "address" varchar(100),
  "city" varchar(85),
  "state" varchar(13),
  "zip" varchar(5)
);

COMMENT ON COLUMN "customers"."id" IS 'the primary key';

COMMENT ON COLUMN "customers"."first_name" IS '50 length becasue the longest out of millions was 46';

COMMENT ON COLUMN "customers"."last_name" IS 'length similar to first name';

COMMENT ON COLUMN "customers"."email" IS 'Out of millions of customers, the longest was 64. This is to be safe';

COMMENT ON COLUMN "customers"."address" IS 'Longest in the united states is 95 characters long';

COMMENT ON COLUMN "customers"."city" IS 'The longest city name in the world is 85';

COMMENT ON COLUMN "customers"."state" IS 'Minus Rhode island full state name, the longest is 13';

COMMENT ON COLUMN "customers"."zip" IS 'Only need 5. No ranges here just a single code';
