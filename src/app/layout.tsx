'use client';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { useState } from 'react';
import './globals.css';

const spaceMono = Space_Mono({ weight: ['700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tip Calculator',
	description: 'app that allows you to calculate the total ticket/tip for person'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<boolean>(false);

	const changePageTheme = () => {
		setTheme(!theme);
	};

	return (
		<html
			lang='en'
			className={`${theme ? 'dark' : ''}`}>
			<head>
				<link
					rel='icon'
					href='/calculator.svg'
				/>
			</head>
			<body className={`${spaceMono.className} bg-[#C5E4E7] dark:bg-black`}>
				<main>
					<div className='block fixed top-2  ml-2 z-50'>
						<button
							className='bg-[#00494D] text-[#F4FAFA] px-4 py-2 rounded-lg left'
							onClick={changePageTheme}>
							{theme ? '🌞' : '🌙'}
						</button>
					</div>
					{children}
				</main>
			</body>
		</html>
	);
}
