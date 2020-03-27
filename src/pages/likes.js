import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import Layout from '~/layout';
import stagger from '~/animations/stagger';
import fadeUp from '~/animations/fadeUp';
import slide from '~/animations/slide';

export default function Likes() {
    const { likedProducts } = useSelector(state => state.user);
    return (
        <Layout>
            <motion.h1
                variants={slide}
                initial="initial"
                animate="slidein"
                className="font-bold text-3xl text-gray-500 mb-10"
            >
                Products that you like{' '}
                <FontAwesomeIcon icon={faHeart} size="1x" />
            </motion.h1>
            {likedProducts.length > 0 ? (
                <motion.ul
                    variants={stagger}
                    animate="animate"
                    className="flex flex-col w-full"
                >
                    {likedProducts.map(product => (
                        <motion.div
                            variants={slide}
                            initial="initial"
                            animate="slidein"
                            key={product.id}
                        >
                            <Link href={`/details?productId=${product.id}`}>
                                <motion.li className="flex flex-row items-center mb-3 cursor-pointer">
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
                                </motion.li>
                            </Link>
                        </motion.div>
                    ))}
                </motion.ul>
            ) : (
                <strong className="text-gray-700 text-2xl">
                    {' '}
                    There's no liked product yet{' '}
                </strong>
            )}
        </Layout>
    );
}
