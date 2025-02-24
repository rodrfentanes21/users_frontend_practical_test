'use client';
import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import type { JSX } from 'react';
import { IUser } from '../types/user';
import { fetchUsers } from '../services/userService';
import { IUserContext } from './interfaces/IUserContext';

const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }): JSX.Element {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadUsers = async (): Promise<void> => {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setError(null);
            } catch (_err) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        void loadUsers();
    }, []);

    const filteredUsers = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return users;

        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.username.toLowerCase().includes(query) ||
                user.address.city.toLowerCase().includes(query)
        );
    }, [users, searchQuery]);

    const openUserModal = (user: IUser): void => {
        setSelectedUser(user);
    };

    const closeUserModal = (): void => {
        setSelectedUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                users,
                filteredUsers,
                searchQuery,
                setSearchQuery,
                loading,
                error,
                selectedUser,
                openUserModal,
                closeUserModal,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUsers(): IUserContext {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
}
