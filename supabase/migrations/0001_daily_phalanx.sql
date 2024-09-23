CREATE TABLE IF NOT EXISTS "client_transaction_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"account_address" text NOT NULL,
	"transaction_tx_hash" text,
	"chain" text,
	"token" text,
	"log" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
