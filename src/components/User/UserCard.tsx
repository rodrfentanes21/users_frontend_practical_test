import { JSX } from 'react';
import { IUser } from '../../types/user';
import { useUsers } from '../../Hooks/UserContext';

interface UserCardProps {
    user: IUser;
}

export function UserCard({ user }: UserCardProps): JSX.Element {
    const { openUserModal } = useUsers();

    return (
        <article
            onClick={() => openUserModal(user)}
            className="group p-[1px] rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            role="button"
            tabIndex={0}
            aria-label={`View details for ${user.name}`}
            onKeyDown={(e) => e.key === 'Enter' && openUserModal(user)}
        >
            <section className="rounded-lg p-4 h-full bg-white dark:bg-black transition-transform duration-300">
                <header>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-1">
                        {user.name}
                    </h2>
                </header>
                <address className="not-italic">
                    <p className="text-indigo-600 transform transition-all duration-300 delay-75 group-hover:translate-x-1">
                        {user.email}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 transform transition-all duration-300 delay-100 group-hover:translate-x-1">
                        {user.address.city}
                    </p>
                </address>
            </section>
        </article>
    );
}
