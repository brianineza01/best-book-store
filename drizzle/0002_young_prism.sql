ALTER TABLE "best-book-store-nextjs-ap-project_category" ADD COLUMN "slug" varchar(255);--> statement-breakpoint
ALTER TABLE "best-book-store-nextjs-ap-project_category" ADD CONSTRAINT "best-book-store-nextjs-ap-project_category_slug_unique" UNIQUE("slug");

CREATE OR REPLACE FUNCTION generate_slug(name TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;

-- Update existing records
UPDATE "best-book-store-nextjs-ap-project_category"
SET slug = generate_slug(name)
WHERE slug IS NULL OR slug = '';

ALTER TABLE "best-book-store-nextjs-ap-project_category" ALTER COLUMN "slug" SET NOT NULL;


-- Create trigger function
CREATE OR REPLACE FUNCTION set_slug_from_name()
RETURNS TRIGGER AS $$
BEGIN
    NEW.slug := generate_slug(NEW.name);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER set_category_slug_trigger
    BEFORE INSERT ON "best-book-store-nextjs-ap-project_category"
    FOR EACH ROW
    EXECUTE FUNCTION set_slug_from_name();