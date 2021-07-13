##############################################################################################
####      					Makefile v0.0.1 - Customer-Tracker						      ####
####       		 Customer-Tracker makefile for streamlined development and sys config 	  ####
####    -------------------------------------------------------------------------------   ####
####    Created by: Gregory Roberts (Software Developer Intern, HEB Digital POS Team)     ####
####    Created: 07/13/21			Updated: 07/13/21									  ####
####    																				  ####
####	Notes: This is as plug-and-play as it gets. Just have docker installed and run 	  ####
####    																				  ####
##############################################################################################

# Create the postgres:12-alpine Docker container with the username 'root'
# and password 'secret', on localhost:5432. Container will be named 'customer-tracker-postgres12'
postgresup:
	docker run --name customer-tracker-postgres12 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:12-alpine

# This command executes two things:
# 1. Stop the PostgreSQL Docker container named 'customer-tracker-postgres12'
# 2. Remove the PostgreSQL Docker container named 'customer-tracker-postgres12'
postgresdown:
	docker kill customer-tracker-postgres12
	docker rm customer-tracker-postgres12

# Create the database 'customer_tracker' on the 'customer-tracker-postgres12' container.
# This is the central database for customer-tracker.
# Username: root
# Owner: root
createdb:
	docker exec -it customer-tracker-postgres12 createdb --username=root --owner=root customer_tracker

# Delete the database 'customer_tracker' on the 'customer-tracker-postgres12' container.
# This is the central database for customer-tracker.
dropdb:
	docker exec -it customer-tracker-postgres12 dropdb customer_tracker

# Create the initial schema's tables, indexes, and relationships.
# This uses the migrations files in '.\src\database\migrations'
migrateup:
	migrate -path db/migrations -database "postgresql://root:secret@localhost:5432/customer_tracker?sslmode=disable" -verbose up

# Undo the creation of the initial schema's tables, indexes, and relationships.
# This uses the migrations files in '.\src\database\migrations'
migratedown:
	migrate -path db/migrations -database "postgresql://root:secret@localhost:5432/customer_tracker?sslmode=disable" -verbose down

# Declare all our commands here. If you add more above, you have to add them below.
.PHONY: postgresup postgresdown dropdb mirateup migratedown

