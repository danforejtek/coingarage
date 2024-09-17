CREATE TABLE IF NOT EXISTS "transaction_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"transaction_tx_hash" text NOT NULL,
	"log" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"tx_hash" text NOT NULL,
	"chain" text NOT NULL,
	"token" text NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"amount" text NOT NULL,
	"status" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transactions_tx_hash_unique" UNIQUE("tx_hash")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transaction_logs" ADD CONSTRAINT "transaction_logs_transaction_tx_hash_transactions_tx_hash_fk" FOREIGN KEY ("transaction_tx_hash") REFERENCES "public"."transactions"("tx_hash") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
