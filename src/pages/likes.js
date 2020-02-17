import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Layout from '~/layout';

export default function Likes() {
    const { likedProducts } = useSelector(state => state.user);
    return (
        <Layout>
            <h1 className="font-bold text-3xl text-gray-500 mb-10">
                Products that you like{' '}
                <FontAwesomeIcon icon={faHeart} size="1x" />
            </h1>
            {likedProducts.length > 0 ? (
                <ul className="flex flex-col w-full">
                    {likedProducts.map(product => (
                        <Link href={`/details?productId=${product.id}`}>
                            <li className="flex flex-row items-center mb-3 cursor-pointer">
                                <img
                                    className="w-80 p-2 rounded"
                                    src={product.image}
                                    alt={product.name}
                                    aria-label={product.name}
                                    title={product.name}
                                />
                                <strong className="ml-2 transition-colors duration-300 text-gray-700 hover:text-gray-800 hover:underline">
                                    {product.name}
                                </strong>
                            </li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <strong className="text-gray-700 text-2xl">
                    {' '}
                    There's no liked product yet{' '}
                </strong>
            )}
        </Layout>
    );
}
