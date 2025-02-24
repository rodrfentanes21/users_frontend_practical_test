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
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn m-0 p-4 bg-transparent w-full h-full"
            onClick={handleOverlayClick}
            aria-modal="true"
            aria-labelledby="modal-title"
            role="dialog"
        >
            <article
                className="bg-white dark:bg-black rounded-lg p-[1px] w-full max-w-2xl relative bg-gradient-to-r from-indigo-500 to-indigo-700 animate-slideIn max-h-[90vh]"
                role="document"
            >
                <section className="bg-white dark:bg-black rounded-lg flex flex-col max-h-[calc(90vh-2px)]">
                    <header className="p-4 sm:p-6 border-b border-indigo-500/20">
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-indigo-500 hover:text-indigo-700 transition-colors duration-200 hover:scale-110 transform p-1"
                            type="button"
                        >
                            ✕
                        </button>
                        <h2
                            id="modal-title"
                            className="text-xl sm:text-2xl font-bold pr-8 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent animate-slideInFromLeft break-words"
                            aria-level={2}
                        >
                            {title}
                        </h2>
                    </header>
                    <main
                        className="p-4 sm:p-6 overflow-y-auto animate-fadeInUp"
                        role="main"
                        aria-label="User details"
                    >
                        {children}
                    </main>
                </section>
            </article>
        </dialog>
    );
}
