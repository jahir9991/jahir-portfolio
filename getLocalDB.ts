

import Database from 'better-sqlite3';

import { drizzle } from "drizzle-orm/better-sqlite3";


export default drizzle(new Database('.wrangler/state/v3/d1/jahir_demo_db/db.sqlite'));


