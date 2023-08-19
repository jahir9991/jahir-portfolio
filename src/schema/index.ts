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
	createdAt: integer("created_at",{ mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
	deletedAt: integer("deleted_at",{ mode: 'timestamp' }),
	updatedAt: integer("updated_at",{ mode: 'timestamp' }),
});