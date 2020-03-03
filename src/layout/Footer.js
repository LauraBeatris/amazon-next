import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faClipboardList,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="lg:hidden bg-white fixed bottom-0 right-0 w-full shadow-lg py-4 px-5">
            <nav>
                <ul className="flex flex-row w-full justify-between">
                    <li>
                        <Link href="/">
                            <>
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                    size="lg"
                                    className="text-gray-800"
                                />
                            </>
                        </Link>
                    </li>{' '}
                    <li>
                        <Link href="/cart">
                            <>
                                <FontAwesomeIcon
                                    icon={faShoppingBag}
                                    size="lg"
                                    className="text-gray-800"
                                />
                            </>
                        </Link>
                    </li>
                    <li>
                        <Link href="/likes">
                            <>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size="lg"
                                    className="text-gray-800"
                                />
                            </>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
