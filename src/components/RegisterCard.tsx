import React from 'react';

import Link from 'next/link';

const RegisterCard = () => {
	return (
		<div className="flex justify-center items-center gap-24 p-7 bg-cool-blue-800 rounded-lg">
			<p className="text-white text-xl">Knowledge for free</p>

			<Link className="button-primary" href="/register">
				Register {' '}
				<span className="font-inter">&rarr;</span>
			</Link>
		</div>
	);
}

export default RegisterCard;
