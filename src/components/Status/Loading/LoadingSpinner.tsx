import { JSX } from 'react';

export function LoadingSpinner(): JSX.Element {
    return (
        <div className="animate-spin rounded-full h-16 aspect-square border-t-4 border-b-4 border-indigo-500"></div>
    );
}
