import { IUser } from '@/types/user';

export interface IUserContext {
    users: IUser[];
    filteredUsers: IUser[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    loading: boolean;
    error: string | null;
    selectedUser: IUser | null;
    openUserModal: (user: IUser) => void;
    closeUserModal: () => void;
}
