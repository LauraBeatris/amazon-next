import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Layout from '~/layout';
import ProductList from '~/components/Slider';

import productsService from '~/services/products';

import slide from '~/animations/slide';
import stagger from '~/animations/stagger';

function Home({ productList, error }) {
    return (
        <Layout>
            {!error && Object.keys(productList).length > 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { staggerChildren: 5 },
                    }}
                    exit={{ opacity: 1 }}
                    className="w-full py-16 px-5 lg:py-0 lg:px-0"
                >
                    <motion.div
                        variants={slide}
                        initial="initial"
                        animate="slidein"
                        exit="slideout"
                        key="technology"
                        className="mb-8 w-full"
                    >
                        <motion.h2
                            variants={slide}
                            initial="initial"
                            animate="slidein"
                            exit="slideout"
                            className="text-2xl mb-2 lg:pr-8 pr-0 text-gray-800 font-bold"
                        >
                            {' '}
                            Computers and Accessories{' '}
                        </motion.h2>
                        <ProductList
                            type="computersAndAccessories"
                            productList={productList}
                        />
                    </motion.div>
                    <motion.div
                        variants={slide}
                        initial="initial"
                        animate="slidein"
                        exit="slideout"
                        key="videogames"
                        className="w-full my-8"
                    >
                        <motion.h2
                            variants={slide}
                            initial="initial"
                            animate="slidein"
                            exit="slideout"
                            className="text-2xl mb-2 lg:pr-8 pr-0 text-gray-800 font-bold"
                        >
                            {' '}
                            Video Games{' '}
                        </motion.h2>
                        <ProductList
                            type="videoGames"
                            productList={productList}
                        />
                    </motion.div>

                    <motion.div
                        variants={slide}
                        initial="initial"
                        animate="slidein"
                        exit="slideout"
                        key="topsellers"
                        transition="transition"
                        className="w-full pb-5"
                    >
                        <motion.h2
                            variants={slide}
                            initial="initial"
                            animate="slidein"
                            exit="slideout"
                            className="text-2xl mb-2 lg:pr-8 pr-0 text-gray-800 font-bold"
                        >
                            {' '}
                            Amazon Top Sellers{' '}
                        </motion.h2>
                        <ProductList
                            type="topSellers"
                            productList={productList}
                        />
                    </motion.div>
                </motion.div>
            ) : (
                <span className="text-xl text-center">
                    {' '}
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        color="red"
                    />{' '}
                    There was an error while consulting the products{' '}
                </span>
            )}
        </Layout>
    );
}

Home.getInitialProps = async () => {
    try {
        const products = await productsService();
        const computersAndAccessories = products.filter(
            product =>
                product.type.includes('computers') ||
                product.type.includes('technologies')
        );

        const videoGames = products.filter(product =>
            product.type.includes('videogames')
        );

        const topSellers = products.filter(product =>
            product.type.includes('top-sellers')
        );

        return {
            productList: { videoGames, computersAndAccessories, topSellers },
        };
    } catch (err) {
        return { error: err };
    }
};

Home.defaultProps = {
    error: null,
};

Home.propTypes = {
    productList: PropTypes.shape().isRequired,
    error: PropTypes.shape(),
};

export default Home;
