import { render, screen, fireEvent } from '@testing-library/react';
import { UserCard } from '../UserCard';
import { mockUser } from '../../../test/utils';

const mockOpenUserModal = jest.fn();

jest.mock('../../../Hooks/UserContext', () => ({
    useUsers: () => ({
        openUserModal: mockOpenUserModal,
    }),
}));

describe('UserCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders user information correctly', () => {
        render(<UserCard user={mockUser} />);

        expect(screen.getByText(mockUser.name)).toBeInTheDocument();
        expect(screen.getByText(mockUser.email)).toBeInTheDocument();
        expect(screen.getByText(mockUser.address.city)).toBeInTheDocument();
    });

    it('calls openUserModal when clicked', () => {
        render(<UserCard user={mockUser} />);

        const card = screen.getByRole('button', { name: `View details for ${mockUser.name}` });
        fireEvent.click(card);

        expect(mockOpenUserModal).toHaveBeenCalledWith(mockUser);
    });

    it('calls openUserModal when Enter key is pressed', () => {
        render(<UserCard user={mockUser} />);

        const card = screen.getByRole('button', { name: `View details for ${mockUser.name}` });
        fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });

        expect(mockOpenUserModal).toHaveBeenCalledWith(mockUser);
    });

    it('calls openUserModal when Space key is pressed', () => {
        render(<UserCard user={mockUser} />);

        const card = screen.getByRole('button', { name: `View details for ${mockUser.name}` });
        fireEvent.keyDown(card, { key: ' ', code: 'Space' });

        expect(mockOpenUserModal).toHaveBeenCalledWith(mockUser);
    });

    it('has correct accessibility attributes', () => {
        render(<UserCard user={mockUser} />);

        const card = screen.getByRole('button', { name: `View details for ${mockUser.name}` });

        expect(card).toHaveAttribute('aria-haspopup', 'dialog');
        expect(card).toHaveAttribute('aria-expanded', 'false');
        expect(card).toHaveAttribute('tabIndex', '0');
    });
});
