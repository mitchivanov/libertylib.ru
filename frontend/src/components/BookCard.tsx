import React from 'react';

export default function BookCard({ title, author, description, onRead, onDownload }) {
    return (
        <div className="card h-100" style={{ minWidth: '200px' }}>
            <img src="#" className="card-img-top" alt="Обложка книги" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Автор: {author || 'Не указан'}</p>
                <p className="card-text">{description || 'Описание отсутствует'}</p>
                <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={onRead}>
                        Читать
                    </button>
                    <button className="btn btn-success" onClick={onDownload}>
                        Скачать
                    </button>
                </div>
            </div>
        </div>
    );
}
