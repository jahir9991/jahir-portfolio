import { sql } from 'drizzle-orm';
import { SQLiteTimestamp, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';


export const Skill = sqliteTable('skill', {
	id: integer('id').primaryKey(),
	name: text('name').notNull().unique(),
	description: text('description').notNull(),
	image: text('image').notNull(),
	link: text('link').notNull(),
	creator: text('creator'),
	timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});