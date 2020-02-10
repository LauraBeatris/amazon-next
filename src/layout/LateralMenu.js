import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faClipboardList,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function LateralMenu() {
    return (
        <div className="hidden py-8 lg:flex flex-col justify-between items-center h-full shadow-lg">
            <Link href="/">
                <img
                    src="/static/amazon.png"
                    alt="Amazon"
                    aria-label="Amazon"
                    className="w-8 h-8 mb-8 rounded-full cursor-pointer"
                />
            </Link>

            <nav>
                <ul>
                    <nav>
                        <ul>
                            <li className="mb-8">
                                <Link href="/">
                                    <FontAwesomeIcon
                                        icon={faClipboardList}
                                        size="lg"
                                        className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                    />
                                </Link>
                            </li>{' '}
                            <li className="mb-8">
                                <Link href="/cart">
                                    <FontAwesomeIcon
                                        icon={faShoppingBag}
                                        size="lg"
                                        className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                    />
                                </Link>
                            </li>
                            <li className="mt-8">
                                <Link href="/likes">
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        size="lg"
                                        className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </ul>
            </nav>

            <img
                src="/static/user.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
            />
        </div>
    );
}
