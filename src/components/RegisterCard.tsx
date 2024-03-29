import React from 'react';

import Link from 'next/link';

const RegisterCard = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-center items-center gap-7 p-7 bg-cool-blue-800 rounded-lg">
			<p className="text-white text-xl">Knowledge for free</p>

			<Link className="button-primary sm:px-7 sm:py-3 px-12 py-3" href="/register">
				Register {' '}
				<span className="font-inter">&rarr;</span>
			</Link>
		</div>
	);
}

export default RegisterCard;
