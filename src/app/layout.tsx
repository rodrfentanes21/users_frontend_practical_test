import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './styles/globals.css';
import 'leaflet/dist/leaflet.css';
import { JSX } from 'react';
import { UserProvider } from '../hooks/UserContext';

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
            <body className={`${montserrat.variable} font-montserrat`}>
                <UserProvider>{children}</UserProvider>
            </body>
        </html>
    );
}
