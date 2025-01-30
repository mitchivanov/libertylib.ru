import React from 'react';
import BookCard from '../components/BookCard';

export default function LibraryPage() {
    const books = [
        { id: 1, title: 'Название книги 1', author: 'Автор 1', description: 'Описание 1' },
        { id: 2, title: 'Название книги 2', author: 'Автор 2', description: 'Описание 2' },
        { id: 3, title: 'Название книги 3', author: 'Автор 3', description: 'Описание 3' }
    ];

    return (
        <section className="library container mt-5">
            <h2>Библиотека</h2>
            <div className="row">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <BookCard {...book} onRead={() => alert(`Читать ${book.title}`)} onDownload={() => alert(`Скачать ${book.title}`)} />
                        </div>
                    ))
                ) : (
                    <p>Нет доступных книг для скачивания.</p>
                )}
            </div>
        </section>
    );
}
