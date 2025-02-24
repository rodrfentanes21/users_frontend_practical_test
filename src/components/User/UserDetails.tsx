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
        <div className="space-y-6">
            <div className="grid gap-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <span className="font-medium">Username:</span> {user.username}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base break-all">
                    {user.email}
                </p>
            </div>

            <div className="grid gap-2">
                <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">Address</h3>
                <p className="dark:text-gray-300 text-sm sm:text-base">
                    {user.address.street}, {user.address.suite}
                </p>
                <p className="dark:text-gray-300 text-sm sm:text-base">
                    {user.address.city}, {user.address.zipcode}
                </p>
            </div>

            <div className="grid gap-2">
                <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">Location</h3>
                <UserLocationMap geo={user.address.geo} userName={user.name} />
            </div>

            <div className="grid gap-2">
                <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">Contact</h3>
                <p className="dark:text-gray-300 text-sm sm:text-base break-all">
                    <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="dark:text-gray-300 text-sm sm:text-base break-all">
                    <span className="font-medium">Website:</span>{' '}
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

            <div className="grid gap-2">
                <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">Company</h3>
                <p className="font-medium dark:text-gray-300 text-sm sm:text-base">
                    {user.company.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm sm:text-base">
                    &ldquo;{user.company.catchPhrase}&rdquo;
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm">
                    {user.company.bs}
                </p>
            </div>
        </div>
    );
}
