import React from 'react';

export default function Avatar({ src, alt }) {
    const fallbackImg = 'https://via.placeholder.com/150';

    return (
        <div style={{ width: '100px', height: '100px' }}>
            <img
                src={src || fallbackImg}
                alt={alt || 'User Avatar'}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '2px solid #ccc'
                }}
            />
        </div>
    );
}

