import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public and ignored routes explicitly
const publicRoutes = createRouteMatcher([
	'/', // Home page
	'/events/:id', // Event details pages
	'/api/webhook/clerk', // Clerk webhook endpoint
	'/api/webhook/stripe', // Stripe webhook endpoint
	'/api/uploadthing', // File upload endpoint
	'/sign-in(.*)', // Sign-in page and all its sub-routes
	'/sign-up(.*)', // Sign-up page and all its sub-routes
]);

const ignoredRoutes = createRouteMatcher([
	'/api/webhook/clerk', // Clerk webhook endpoint
	'/api/webhook/stripe', // Stripe webhook endpoint
	'/api/uploadthing', // File upload endpoint
]);

// Configure clerkMiddleware to protect routes based on user authentication
export default clerkMiddleware(
	(auth, req) => {
		if (!publicRoutes(req) && !ignoredRoutes(req)) {
			// Protect these routes, redirecting unauthenticated users to the sign-in page
			auth().protect();
		}
	},
	{ debug: process.env.NODE_ENV === 'development' }
); // Enable debugging in development mode

export const config = {
	// The matcher configuration ensures middleware runs on all routes except static assets and Next.js internals
	matcher: ['/((?!.+\\.[\\w]+$|__next).*)', '/', '/(api|trpc)(.*)'],
};
