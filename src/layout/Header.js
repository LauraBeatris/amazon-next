import React from 'react';

export default function Header() {
    return (
        <header className="z-50 lg:hidden bg-white w-full shadow-lg p-4 flex justify-between items-center">
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
