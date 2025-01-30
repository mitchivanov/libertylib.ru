import React from 'react';
import Avatar from '../components/Avatar';

interface User {
    username: string;
    email: string;
    phoneNumber: string;
    address: string;
    avatar: string;
}

export default function ProfilePage(): JSX.Element {
    const user: User = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        phoneNumber: '+7 900 123 45 67',
        address: 'Москва, Россия',
        avatar: 'https://via.placeholder.com/150'
    };

    return (
        <section className="flex flex-col items-center py-10">
            <h2 className="text-3xl font-bold mb-6">Личный кабинет</h2>
            <Avatar src={user.avatar} alt={`${user.username} avatar`} />
            <div className="mt-4 text-center">
                <p className="text-lg"><strong>Имя:</strong> {user.username}</p>
                <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                <p className="text-lg"><strong>Телефон:</strong> {user.phoneNumber}</p>
                <p className="text-lg"><strong>Адрес:</strong> {user.address}</p>
            </div>
        </section>
    );
}
