import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const allowedOrigins = process.env.VITE_ALLOWED_ORIGINS?.split(',')||[];
export default defineConfig({
	plugins: [sveltekit()],
	
});
