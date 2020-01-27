import React from 'react';

export default function Header() {
    return (
        <header className="lg:hidden bg-white shadow-lg py-2 flex justify-between items-center">
            <img src="/static/amazon.png" alt="Amazon" aria-label="Amazon" />
            <img
                src="/static/user.jpg"
                alt="User Profile"
                aria-label="User Profile"
            />
        </header>
    );
}
