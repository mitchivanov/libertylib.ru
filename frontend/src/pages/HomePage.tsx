import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <section className="main-section text-center">
            <div className="hero">
                <h1 className="display-4">Добро пожаловать на крутой сайт!</h1>
                <p className="lead">Йоу, крутой сайт где представлена самая лучшая библиотека</p>
                <Link to="/library" className="btn btn-success btn-lg">Перейти в библиотеку</Link>
            </div>
            <div>
                <h2>Что здесь?</h2>
                <p>Привет! Тут очень много крутой литературы, которую ты вряд-ли быстро найдёшь</p>
                <p>Давай там удачи почитать</p>
            </div>
            <Link to="/register" className="btn btn-primary m-2">Регистрация</Link>
            <Link to="/login" className="btn btn-secondary m-2">Вход</Link>
        </section>
    );
}
