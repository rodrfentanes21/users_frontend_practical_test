import { IUser } from '../types/user';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<IUser[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = (await response.json()) as IUser[];
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
