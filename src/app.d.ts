// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
			  MYDB: D1Database;
			};
			// context: {
			//   waitUntil(promise: Promise<any>): void;
			// };
			// caches: CacheStorage & { default: Cache };
		  }
	}
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
  }

export {};
