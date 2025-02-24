import { IUser } from '@/types/user';
import { JSX } from 'react';
import dynamic from 'next/dynamic';

const UserLocationMap = dynamic(
    () => import('../Map/UserLocationMap').then((mod) => mod.UserLocationMap),
    { ssr: false }
);

interface UserDetailsProps {
    user: IUser;
}

export function UserDetails({ user }: UserDetailsProps): JSX.Element {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-gray-600 dark:text-gray-400">Username: @{user.username}</p>
                <p className="text-indigo-600 dark:text-indigo-400">{user.email}</p>
            </div>

            <div>
                <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Address</h3>
                <p className="dark:text-gray-300">
                    {user.address.street}, {user.address.suite}
                </p>
                <p className="dark:text-gray-300">
                    {user.address.city}, {user.address.zipcode}
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
                    Location
                </h3>
                <UserLocationMap geo={user.address.geo} userName={user.name} />
            </div>

            <div>
                <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Contact</h3>
                <p className="dark:text-gray-300">Phone: {user.phone}</p>
                <p className="dark:text-gray-300">
                    Website:{' '}
                    <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline"
                    >
                        {user.website}
                    </a>
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Company</h3>
                <p className="font-medium dark:text-gray-300">{user.company.name}</p>
                <p className="text-gray-600 dark:text-gray-400 italic">
                    "{user.company.catchPhrase}"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{user.company.bs}</p>
            </div>
        </div>
    );
}
