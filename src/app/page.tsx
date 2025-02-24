'use client';

import { JSX } from 'react';
import { useUsers } from '../hooks/UserContext';
import { Modal } from '../components/Modal/Modal';
import { LoadingStatus } from '../components/Status/Loading/LoadingStatus';
import { ErrorStatus } from '../components/Status/ErrorStatus';
import { UsersList } from '../components/User/UsersList';
import { UserDetails } from '../components/User/UserDetails';

export default function Home(): JSX.Element {
    const { loading, error, selectedUser, closeUserModal } = useUsers();

    if (loading) {
        return <LoadingStatus />;
    }

    if (error !== null && error !== '') {
        return <ErrorStatus message={error} />;
    }

    return (
        <>
            <UsersList />

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
