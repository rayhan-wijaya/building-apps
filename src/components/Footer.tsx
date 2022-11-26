import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import RegisterCard from 'components/RegisterCard';
import Copyright from 'components/Copyright';

interface Props {
	includeRegisterCard: boolean;
}

const Footer = ({ includeRegisterCard }: Props) => {
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

			<div className="flex gap-9">
				<div className="flex flex-col text-gray-400 text-xl">
					<Link href="/">More Info</Link>
					<Link href="/">Blog</Link>
					<Link href="/">FAQ</Link>
				</div>

				<div className="flex flex-col text-gray-400 text-xl">
					<p>
						You can contact: {' '}
						<br />
						+62 813 2486 2010
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
