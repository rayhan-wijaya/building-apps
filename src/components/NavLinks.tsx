import Link from 'next/link';

type Props = {
  isNavbar?: boolean;
  className?: string;
}

const NavLinks: React.FC<Props> = ({ isNavbar = false, className }) => {
	return (
		<>
      {
        isNavbar
        ? <Link href="/" className={`text-lg block sm:hidden ${className}`}>Home</Link>
        : null
      }
      
			<Link href="/info" className={`text-lg ${className}`}>More Info</Link>
			<Link href="/blog" className={`text-lg ${className}`}>Blog</Link>
		</>
	);
}

export default NavLinks;