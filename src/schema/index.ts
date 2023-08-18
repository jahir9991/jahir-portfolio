import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const Skill = sqliteTable('skill', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	image: text('image').notNull(),
	link: text('link').notNull(),
});