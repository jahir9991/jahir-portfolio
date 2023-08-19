import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, } from 'drizzle-orm/sqlite-core';


export const Skill = sqliteTable('skill', {
	id: integer('id',{mode:'number'}).primaryKey(),
	name: text('name').notNull().unique(),
	description: text('description').notNull(),
	image: text('image').notNull(),
	link: text('link').notNull(),
	creator: text('creator'),
	isActive: integer('is_active',{mode:'boolean'}).default(true),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	deletedAt: text("deleted_at"),
	updatedAt: text("updated_at"),
});