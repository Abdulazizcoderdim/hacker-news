import { drizzle } from 'drizzle-orm/postgres-js';

import postgres from 'postgres';
import { z } from 'zod';

const EnvSchema = z.object({
  DATABASE_URL: z.string(),
});

const processEnv = EnvSchema.parse(process.env);

const queryClinet = postgres(processEnv.DATABASE_URL);
const db = drizzle(queryClinet);
const result = await db.execute('select 1');
console.log(result);
