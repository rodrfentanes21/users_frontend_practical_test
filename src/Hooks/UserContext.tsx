'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { JSX } from 'react';
import { IUser } from '../types/user';
import { fetchUsers } from '../services/userService';

interface UserContextType {
    users: IUser[];
    loading: boolean;
    error: string | null;
    selectedUser: IUser | null;
    openUserModal: (user: IUser) => void;
    closeUserModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }): JSX.Element {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

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

export function useUsers(): UserContextType {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
}
