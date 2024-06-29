import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const allowedOrigins = process.env.VITE_ALLOWED_ORIGINS?.split(',')||[];
export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // Allows access from any host
    	port: 5173,
		cors: {
			origin: allowedOrigins,
			methods: ['GET', 'POST', 'PUT', 'DELETE'],
			allowedHeaders: ['Content-Type', 'Authorization']
		}
	}
});
