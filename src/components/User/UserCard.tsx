import { JSX } from 'react';
import { IUser } from '../../types/user';
import { useUsers } from '../../Hooks/UserContext';

interface UserCardProps {
    user: IUser;
}

export function UserCard({ user }: UserCardProps): JSX.Element {
    const { openUserModal } = useUsers();

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openUserModal(user);
        }
    };

    return (
        <article
            onClick={() => openUserModal(user)}
            onKeyPress={handleKeyPress}
            className="group p-[1px] rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:shadow-[0_0_15px_rgba(99,102,241,0.05)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            role="button"
            tabIndex={0}
            aria-label={`View details for ${user.name}`}
            aria-haspopup="dialog"
            aria-expanded="false"
        >
            <section className="rounded-lg p-4 h-full bg-white dark:bg-black transition-transform duration-300 shadow-lg shadow-indigo-500/5 dark:shadow-indigo-400/5">
                <header>
                    <h2
                        className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-1"
                        aria-level={2}
                    >
                        {user.name}
                    </h2>
                </header>
                <address className="not-italic" aria-label={`Contact information for ${user.name}`}>
                    <p
                        className="text-indigo-600 transform transition-all duration-300 delay-75 group-hover:translate-x-1"
                        aria-label="Email address"
                    >
                        {user.email}
                    </p>
                    <p
                        className="text-gray-600 dark:text-gray-400 transform transition-all duration-300 delay-100 group-hover:translate-x-1"
                        aria-label="City"
                    >
                        {user.address.city}
                    </p>
                </address>
            </section>
        </article>
    );
}
