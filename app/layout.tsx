import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Evently',
	description:
		'Evently - Streamline your event planning and management with our comprehensive tools. From scheduling to attendee management, make every event a success!',
	icons: {
		icon: '/assets/images/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body >{children}</body>
			</html>
		</ClerkProvider>
	);
}
