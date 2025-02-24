import { JSX, ChangeEvent } from 'react';
import { useUsers } from '../../Hooks/UserContext';

export function SearchBar(): JSX.Element {
    const { searchQuery, setSearchQuery } = useUsers();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="relative w-full max-w-xl mx-auto mb-6">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 sm:pl-[11.5rem] py-2 rounded-lg border-2 border-indigo-500/20 focus:border-indigo-600 focus:outline-none bg-white dark:bg-black text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                aria-label="Search users by name, email, username or city"
                placeholder="Search users..."
            />
            <span className="sr-only">Search users by name, email, username or city</span>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
}
