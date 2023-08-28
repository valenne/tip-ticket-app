import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { ThemeProvider } from '../components/provider/theme-provider';
import './globals.css';

const spaceMono = Space_Mono({ weight: ['700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tip Calculator',
	description: 'app that allows you to calculate the total ticket/tip for person'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/calculator.svg'
				/>
			</head>
			<body className={`${spaceMono.className} bg-[#C5E4E7] dark:bg-black`}>
				<main>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem>
						<ThemeSwitcher />
						{children}
					</ThemeProvider>
				</main>
			</body>
		</html>
	);
}
