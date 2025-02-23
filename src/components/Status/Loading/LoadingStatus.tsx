import { JSX } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
export function LoadingStatus(): JSX.Element {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center gap-4"
            role="main"
            aria-busy="true"
            aria-label="Loading content"
        >
            <LoadingSpinner />
            <p
                className="text-indigo-600 dark:text-indigo-400"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                aria-label="Loading users"
            >
                Loading users...
            </p>
        </main>
    );
}
