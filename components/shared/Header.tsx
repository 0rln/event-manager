'use client';
import { SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import { useClerk } from '@clerk/clerk-react';

const Header = () => {
	const { session, user } = useClerk();
	console.log(session, user?.getSessions,);

	

	return (
		<header className='w-full border-b'>
			<div className='wrapper flex items-center justify-between'>
				<Link href='/' className='w-36'>
					<Image
						src='/assets/images/logo.svg'
						width={128}
						height={38}
						alt='Evently logo'
					/>
				</Link>

				<SignedIn>
					<nav className='md:flex-between hidden w-full max-w-xs'>
						<NavItems />
					</nav>
					<Button asChild className='rounded-full' size='lg'>
						<Link href='/settings'>Settings</Link>
					</Button>
				</SignedIn>

				<div className='flex w-32 justify-end gap-3'>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />

						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className='rounded-full' size='lg'>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
