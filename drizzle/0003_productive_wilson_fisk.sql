ALTER TABLE "best-book-store-nextjs-ap-project_account" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_account" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_book" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_book" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_category" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_category" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_session" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_session" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_user" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_user" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_verification_token" ADD COLUMN "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_verification_token" ADD COLUMN "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL;