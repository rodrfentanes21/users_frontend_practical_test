import { JSX } from 'react';

interface ErrorStateProps {
    message: string;
}

export function ErrorStatus({ message }: ErrorStateProps): JSX.Element {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <section role="alert" aria-live="assertive" className="text-center">
                <h1 className="text-2xl text-red-500 dark:text-red-400">Error: {message}</h1>
            </section>
        </main>
    );
}
