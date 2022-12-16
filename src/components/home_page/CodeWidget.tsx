import React from 'react';

interface ComponentProps {
	name: string;
	className?: string;
	hasAnimation?: boolean;
}

const Component = ({ name, className, hasAnimation }: ComponentProps) => {
	let formattedClassName = '';

	if (hasAnimation) {
		formattedClassName += ' w-0 animate-typing';
	}

	if (className) {
		formattedClassName += ` ${className}`;
	}

	return (
		<pre className={`whitespace-nowrap overflow-hidden ${formattedClassName}`}>
	    	<span className="text-white">&lt;</span>
	    	<span className="text-yellow-400">{name}</span> {' '}
	    	<span className="text-white">/&gt;</span>
		</pre>
	);
}

interface Props {
	className?: string;
}

const CodeWidget = ({ className }: Props) => {
	const components = [
		'ProductName',
		'ProductImage',
		' ',
		'Reviews',
		'Price',
		'Buttons',
	];

	return (
		<div className={`flex gap-3 bg-slate-800 rounded-xl py-5 pl-5 pr-36 shadow-[inset_0px_1px_1px] shadow-slate-400 border-2 border-slate-900 ${className}`}>
			<div className="flex flex-col text-xl text-right text-gray-500 font-mono">
				{components.map((_, i) => {
					return (
						<pre key={i}>{i + 1}</pre>
					);
				})}
			</div>

			<div className="text-gray-500 font-mono list-decimal text-xl w-fit">
				<Component name="ProductName" hasAnimation={true} />
				<Component name="ProductImage" hasAnimation={true} />

				<pre>{' '}</pre>

				<Component name="Reviews" hasAnimation={true} />
				<Component name="Price" hasAnimation={true} />
				<Component name="Buttons" hasAnimation={true} />
			</div>
		</div>
	);
}

export default CodeWidget;
