import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import NavLinks from 'components/NavLinks';

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
		
					<Link href="/" className="text-lg font-semibold">Building Apps</Link>
		
					<div className="hidden sm:flex sm:flex-row justify-center items-center gap-7">
						<NavLinks />
					</div>
				</div>
	
				<div className="hidden xs:flex justify-center items-center gap-7">
					<Link href="/register" className="button-primary bg-ice-blue-300 hover:bg-ice-blue-400 text-white transition-all cursor-pointer">Register</Link>
				</div>
			</div>

			<div className={`sm:hidden items-center text-lg ${areNavLinksOpen ? 'flex flex-col' : 'hidden'}`}>
				<Link href="/register" className="block xs:hidden button-primary rounded-lg text-white bg-ice-blue-300 w-[50%] text-center mb-3">Register</Link>

				<NavLinks />
			</div>
		</div>
	);
}

export default Navbar;
