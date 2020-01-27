import React from 'react';
import { Link } from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faClipboardList,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-white shadow-lg px-5 py-2">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faClipboardList} />
                        </Link>
                    </li>{' '}
                    <li>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/likes">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
