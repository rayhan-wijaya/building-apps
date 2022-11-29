import React from 'react';

import Head from 'next/head';

import RegisterForm from 'components/register_page/RegisterForm';

const Register = () => {
	return (
		<>
			<Head>
				<title>Register • Building Apps</title>
			</Head>

			<main>
				<RegisterForm />
			</main>
		</>
	);
}

export default Register;
