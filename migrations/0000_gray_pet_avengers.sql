CREATE TABLE `skill` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`link` text NOT NULL,
	`creator` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `skill_name_unique` ON `skill` (`name`);