import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NavLinks from 'components/NavLinks';
import RegisterCard from 'components/RegisterCard';
import Copyright from 'components/Copyright';

interface Props {
	includeRegisterCard?: boolean;
}

const Footer = ({ includeRegisterCard = true }: Props) => {
	return (
		<footer className="bg-cool-blue-900">
			<div className="h-32 w-full relative bottom-2">
				<Image
					src="/dividers/waveOpacity.svg"
					alt="A wave opacity divider."
					fill={true}
				/>
			</div>

			<div className="flex flex-col justify-center items-center py-32 gap-20">
				{
					includeRegisterCard
					? <RegisterCard />
					: null
				}

				<FooterInfo /> 

				<Copyright />
			</div>
		</footer>
	);
}

const FooterInfo = () => {
	return (
		<div className="flex flex-col gap-9 items-center">
			<h2 className="text-gray-300 text-xl">Building Apps Program</h2>

			<div className="flex flex-col sm:flex-row gap-9">
				<div className="flex flex-col text-center sm:text-left text-gray-400 text-xl">
					<NavLinks />
				</div>

				<div className="flex flex-col text-center sm:text-left text-gray-400 text-lg gap-5">
					<p>
						You can contact: {' '}
						<br />
						+62 813 2486 2010
					</p>

					<Link href="https://wa.me/+6281324862010">
						Chat With Me
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
