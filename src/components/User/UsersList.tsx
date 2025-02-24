import { JSX } from 'react';
import { UserCard } from './UserCard';
import { SearchBar } from '../Search/SearchBar';
import { useUsers } from '../../Hooks/UserContext';

export function UsersList(): JSX.Element {
    const { filteredUsers } = useUsers();

    return (
        <main className="container mx-auto px-4 py-6">
            <header className="mb-8">
                <h1 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                    Users List
                </h1>
                <SearchBar />
            </header>
            <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                aria-label="Users grid"
            >
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                ) : (
                    <div className="col-span-full text-center text-gray-600 dark:text-gray-400 py-8">
                        No users found matching your search criteria
                    </div>
                )}
            </section>
        </main>
    );
}
