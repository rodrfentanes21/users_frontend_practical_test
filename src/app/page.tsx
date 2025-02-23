'use client';

import { JSX } from 'react';
import { useUsers } from '../Hooks/UserContext';
import { Modal } from '../components/Modal';
import { LoadingStatus } from '../components/LoadingStatus';
import { ErrorState } from '../components/ErrorState';
import { UsersList } from '../components/UsersList';
import { UserDetails } from '../components/UserDetails';

export default function Home(): JSX.Element {
    const { users, loading, error, selectedUser, closeUserModal } = useUsers();

    if (loading) {
        return <LoadingStatus />;
    }

    if (error !== null && error !== '') {
        return <ErrorState message={error} />;
    }

    return (
        <>
            <UsersList users={users} />

            <Modal
                isOpen={selectedUser !== null}
                onClose={closeUserModal}
                title={selectedUser?.name ?? ''}
            >
                {selectedUser && <UserDetails user={selectedUser} />}
            </Modal>
        </>
    );
}
