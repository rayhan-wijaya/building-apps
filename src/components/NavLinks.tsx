import Link from 'next/link';

const NavLinks = () => {
	return (
		<>
		 	<Link href="/" className="text-lg">Home</Link>
			<Link href="/info" className="text-lg">More Info</Link>
			<Link href="/blog" className="text-lg">Blog</Link>
		</>
	);
}

export default NavLinks;