import { JSX } from 'react';
import { IUser } from '../types/user';
import { UserCard } from './UserCard';

interface UsersListProps {
    users: IUser[];
}

export function UsersList({ users }: UsersListProps): JSX.Element {
    return (
        <main className="p-4">
            <header>
                <h1 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                    Users List
                </h1>
            </header>
            <section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                aria-label="Users grid"
            >
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </section>
        </main>
    );
}
