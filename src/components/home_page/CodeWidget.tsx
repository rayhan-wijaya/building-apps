import React from 'react';

interface ComponentProps {
	name: string;
	className?: string;
	hasAnimation?: boolean;
}

const Component = ({ name, className, hasAnimation }: ComponentProps) => {
	let formattedClassName = 'whitespace-no-wrap overflow-hidden text-white';

	if (hasAnimation) {
		formattedClassName += ' w-0 animate-typing';
	}

	if (className) {
		formattedClassName += ` ${className}`;
	}

	return (
		<pre className={formattedClassName}>
			&lt;<span className="text-yellow-400">{name}</span> /&gt;
		</pre>
	);
}

interface Props {
	className?: string;
}

const CodeWidget = ({ className }: Props) => {
	return (
		<div className={`flex flex-col bg-slate-800 shadow-xl rounded-xl py-3 pl-14 pr-36 shadow-[inset_0px_1px_1px] shadow-slate-400 border-2 border-slate-900 ${className}`}>
			<ol className="text-gray-500 font-mono list-decimal text-xl">
				<li> <Component name="ProductName" hasAnimation={true} /> </li>
				<li> <Component name="ProductImage" hasAnimation={true} /> </li>

				<li>
				</li>

				<li> <Component name="Reviews" hasAnimation={true} /> </li>
				<li> <Component name="Price" hasAnimation={true} /> </li>
				<li> <Component name="Buttons" hasAnimation={true} /> </li>
			</ol>
		</div>
	);
}

export default CodeWidget;
