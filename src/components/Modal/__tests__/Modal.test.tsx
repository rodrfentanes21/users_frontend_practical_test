import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
    const mockOnClose = jest.fn();
    const mockTitle = 'Test Modal';
    const mockContent = 'Test Content';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders nothing when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        expect(screen.queryByText(mockTitle)).not.toBeInTheDocument();
        expect(screen.queryByText(mockContent)).not.toBeInTheDocument();
    });

    it('renders content when isOpen is true', () => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        expect(screen.getByText(mockTitle)).toBeInTheDocument();
        expect(screen.getByText(mockContent)).toBeInTheDocument();
    });

    it('calls onClose when clicking the close button', () => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        const closeButton = screen.getByRole('button', { name: /close modal/i });
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when clicking the overlay', () => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        const dialog = screen.getByRole('dialog');
        fireEvent.click(dialog);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when clicking the modal content', () => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        const content = screen.getByText(mockContent);
        fireEvent.click(content);

        expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('has correct accessibility attributes', () => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} title={mockTitle}>
                {mockContent}
            </Modal>
        );

        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveAttribute('aria-modal', 'true');
        expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');

        const title = screen.getByText(mockTitle);
        expect(title).toHaveAttribute('id', 'modal-title');
    });
});
