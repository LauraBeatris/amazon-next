import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faClipboardList,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function LateralMenu() {
    const productsAmount = useSelector(state => state.cart.products.length);
    const likesAmount = useSelector(state => state.user.likedProducts.length);
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
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faClipboardList}
                                            size="lg"
                                            className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                        />
                                    </div>
                                </Link>
                            </li>{' '}
                            <li className="mb-8 relative">
                                <Link href="/cart" passHref>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faShoppingBag}
                                            size="lg"
                                            className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                        />
                                    </div>
                                </Link>
                                <div className="bg-yellow-burn flex items-center text-white font-bold w-4 h-4 rounded-full p-1 absolute top-0 left-60p text-2xs">
                                    {productsAmount}
                                </div>
                            </li>
                            <li className="mt-8 relative">
                                <Link href="/likes" passHref>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            size="lg"
                                            className="text-gray-500 cursor-pointer transition-colors hover:text-gray-600 duration-500 ease-in-out"
                                        />
                                    </div>
                                </Link>
                                <div className="bg-yellow-burn flex items-center text-white font-bold w-4 h-4 rounded-full p-1 absolute top-0 left-60p text-2xs">
                                    {likesAmount}
                                </div>
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
