import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './styles/globals.css';
import { JSX } from 'react';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'My App',
    description: 'My App Description',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} font-montserrat`}>{children}</body>
        </html>
    );
}
