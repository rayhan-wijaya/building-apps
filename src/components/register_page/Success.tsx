import React, { useEffect } from 'react';

import Link from 'next/link';

const Success = () => {
	const inviteLink = 'https://chat.whatsapp.com/DZCrc8H3kt3DHwAspwrYVB';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<div className="flex flex-col items-center gap-12 pt-72 pb-64">
			<div className="flex flex-col items-center gap-2">
				<h1 className="font-semibold text-3xl text-center">Thank you so much for joining! &#10084;</h1>
				<p className="text-lg text-center">Please join this program&apos;s official WhatsApp group.</p>
			</div>

			<Link href={inviteLink} legacyBehavior={true}>
				<a className="button-primary bg-cool-blue-900 text-white">
					Join Group {' '}
					<span className="font-inter">&rarr;</span>
				</a>
			</Link>
		</div>
	);
}

export default Success;
