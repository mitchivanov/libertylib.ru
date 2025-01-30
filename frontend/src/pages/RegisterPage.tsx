import React, { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Регистрация пользователя: ${formData.username}`);
    };

    return (
        <section className="container mt-5">
            <h2 className="text-center">Регистрация</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                {Object.keys(formData).map((key) => (
                    <div className="mb-3" key={key}>
                        <label className="form-label">{key}</label>
                        <input
                            type={key.includes('password') ? 'password' : 'text'}
                            name={key}
                            className="form-control"
                            value={formData[key]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        </section>
    );
}
