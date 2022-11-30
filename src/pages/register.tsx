import React from 'react';

import Head from 'next/head';

import Headline from 'components/register_page/Headline';
import RegisterForm from 'components/register_page/RegisterForm';
import Footer from 'components/Footer';

const Register = () => {
	return (
		<>
			<Head>
				<title>Register • Building Apps</title>
			</Head>

			<main>
				<Headline />

				<section className="mb-24">
					<RegisterForm />
				</section>

				<Footer />
			</main>
		</>
	);
}

export default Register;
