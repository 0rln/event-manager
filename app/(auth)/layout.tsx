const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex-center min-h-screen w-full bg-primary-50 bg-cover bg-center bg-dotted-pattern bg-fixed'>
			{children}
		</div>
	);
};

export default Layout;
