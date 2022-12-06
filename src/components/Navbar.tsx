import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const NavLinks = () => {
	return (
		<>
			<Link href="/info" className="text-lg">More Info</Link>
			<Link href="/blog" className="text-lg">Blog</Link>
			<Link href="/faq" className="text-lg">FAQ</Link>
		</>
	);
}

const Navbar = () => {
	const [areNavLinksOpen, setAreNavLinksOpen] = useState<boolean>();

	const onMenuClicked = () => {
		setAreNavLinksOpen(prev => !prev);
	}

	return (
		<div className="flex flex-col fixed p-5 gap-3 bg-white z-50 w-full shadow-md py-7">
			<div className="flex items-center justify-between">
				<div className="flex justify-center gap-7">
					<button className="block sm:hidden" onClick={onMenuClicked}>
						<Image
							src={areNavLinksOpen ? '/icons/cross.svg' : '/icons/hamburger.svg'}
							alt="The icon of the navbar menu button"
							height={24}
							width={24}
						/>
					</button>
		
					<Link href="/" className="text-xl font-semibold">Building Apps</Link>
		
					<div className="hidden sm:flex sm:flex-row justify-center items-center gap-7">
						<NavLinks />
					</div>
				</div>
	
				<div className="flex justify-center items-center gap-7">
					<Link href="/register" className="button-primary bg-ice-blue-300 hover:bg-ice-blue-400 text-white transition-all cursor-pointer">Register</Link>
				</div>
			</div>

			<div className={`sm:hidden items-center text-lg ${areNavLinksOpen ? 'flex flex-col' : 'hidden'}`}>
				<NavLinks />
			</div>
		</div>
	);
}

export default Navbar;
