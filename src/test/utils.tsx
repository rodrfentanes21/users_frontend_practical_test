import { JSX, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../Hooks/UserContext';

const mockUser = {
    id: 1,
    name: 'Test User',
    username: 'testuser',
    email: 'test@example.com',
    address: {
        street: 'Test Street',
        suite: 'Suite 123',
        city: 'Test City',
        zipcode: '12345',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
    },
    phone: '1-770-736-8031 x56442',
    website: 'test.com',
    company: {
        name: 'Test Company',
        catchPhrase: 'Test Catch Phrase',
        bs: 'Test BS',
    },
};

const mockUsers = [mockUser];

export const customRender = (
    ui: JSX.Element,
    { providerProps = {}, ...renderOptions } = {}
): ReturnType<typeof render> => {
    return render(<UserProvider {...providerProps}>{ui}</UserProvider>, renderOptions);
};

export const createWrapper = (children: ReactNode): JSX.Element => {
    return <UserProvider>{children}</UserProvider>;
};

export { mockUser, mockUsers };
