import { JSX } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export function LoadingStatus(): JSX.Element {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
            <LoadingSpinner />
            <p className="text-indigo-600 dark:text-indigo-400" role="status" aria-live="polite">
                Loading users...
            </p>
        </main>
    );
}
