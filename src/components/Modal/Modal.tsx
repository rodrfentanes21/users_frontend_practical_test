import { JSX, ReactNode, MouseEvent, useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps): JSX.Element | null {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return (): void => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: MouseEvent): void => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <dialog
            ref={modalRef}
            open
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn m-0 p-0 bg-transparent w-full h-full"
            onClick={handleOverlayClick}
            aria-modal="true"
            aria-labelledby="modal-title"
            role="dialog"
        >
            <article
                className="bg-white dark:bg-black rounded-lg p-[1px] max-w-2xl w-full mx-4 relative bg-gradient-to-r from-indigo-500 to-indigo-700 animate-slideIn"
                role="document"
            >
                <section className="bg-white dark:bg-black rounded-lg p-6 relative">
                    <header className="mb-4">
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 text-indigo-500 hover:text-indigo-700 transition-colors duration-200 hover:scale-110 transform"
                            type="button"
                        >
                            ✕
                        </button>
                        <h2
                            id="modal-title"
                            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent animate-slideInFromLeft"
                            aria-level={2}
                        >
                            {title}
                        </h2>
                    </header>
                    <main className="animate-fadeInUp" role="main" aria-label="User details">
                        {children}
                    </main>
                </section>
            </article>
        </dialog>
    );
}
