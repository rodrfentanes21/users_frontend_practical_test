import { IUser } from '@/types/user';

export interface IUserContext {
    users: IUser[];
    loading: boolean;
    error: string | null;
    selectedUser: IUser | null;
    openUserModal: (user: IUser) => void;
    closeUserModal: () => void;
}
