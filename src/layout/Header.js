import React from 'react';

export default function Header() {
    return (
        <header className="lg:hidden bg-white fixed top-0 right-0 w-full shadow-lg p-4 flex justify-between items-center">
            <img
                src="/static/amazon.png"
                alt="Amazon"
                aria-label="Amazon"
                className="w-8"
            />
            <img
                src="/static/user.jpg"
                alt="User Profile"
                aria-label="User Profile"
                className="w-8 h-8 rounded-full"
            />
        </header>
    );
}
