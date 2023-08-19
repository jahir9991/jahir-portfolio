ALTER TABLE skill ADD `created_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE skill ADD `deleted_at` text;--> statement-breakpoint
ALTER TABLE skill ADD `updated_at` text;