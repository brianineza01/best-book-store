CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_account" (
	"user_id" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255),
	CONSTRAINT "best-book-store-nextjs-ap-project_account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_book" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"published" timestamp NOT NULL,
	"pages" integer NOT NULL,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_session" (
	"session_token" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"email_verified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"image" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "best-book-store-nextjs-ap-project_verification_token" (
	"identifier" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL,
	CONSTRAINT "best-book-store-nextjs-ap-project_verification_token_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "best-book-store-nextjs-ap-project_account" ADD CONSTRAINT "best-book-store-nextjs-ap-project_account_user_id_best-book-store-nextjs-ap-project_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."best-book-store-nextjs-ap-project_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "best-book-store-nextjs-ap-project_book" ADD CONSTRAINT "best-book-store-nextjs-ap-project_book_category_id_best-book-store-nextjs-ap-project_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."best-book-store-nextjs-ap-project_category"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "best-book-store-nextjs-ap-project_session" ADD CONSTRAINT "best-book-store-nextjs-ap-project_session_user_id_best-book-store-nextjs-ap-project_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."best-book-store-nextjs-ap-project_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_user_id_idx" ON "best-book-store-nextjs-ap-project_account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_id_idx" ON "best-book-store-nextjs-ap-project_session" USING btree ("user_id");