import { render, screen } from '@testing-library/react';
import { LoadingStatus } from '../LoadingStatus';

describe('LoadingStatus', () => {
    it('renders loading message', () => {
        render(<LoadingStatus />);

        const loadingMessage = screen.getByText(/loading users/i);
        expect(loadingMessage).toBeInTheDocument();
    });

    it('has correct accessibility attributes', () => {
        render(<LoadingStatus />);

        const main = screen.getByRole('main');
        expect(main).toHaveAttribute('aria-busy', 'true');
        expect(main).toHaveAttribute('aria-label', 'Loading content');

        const status = screen.getByRole('status');
        expect(status).toHaveAttribute('aria-live', 'polite');
        expect(status).toHaveAttribute('aria-atomic', 'true');
    });

    it('renders loading spinner', () => {
        render(<LoadingStatus />);

        const spinner = screen.getByRole('status');
        expect(spinner).toBeInTheDocument();
    });
});
