import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationTriangle,
    faArrowLeft,
    faStar,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { database } from '~/lib/firebase';

import Layout from '~/layout';
import Button from '~/components/Button';

import {
    addToCartRequest,
    removeFromCartRequest,
} from '~/store/modules/cart/actions';
import { likeProductRequest } from '~/store/modules/user/actions';

import fadeUp from '~/animations/fadeUp';
import stagger from '~/animations/stagger';

export default function Details({ product, error }) {
    const dispatch = useDispatch();
    const isSelected = useSelector(state =>
        state.cart.products.find(
            selectedProduct => selectedProduct.id === product.id
        )
    );

    const stars = useMemo(() => {
        const initial = [];
        for (let i = 1; i < product.stars; i++) {
            initial.push(
                <FontAwesomeIcon
                    key={i}
                    size="lg"
                    className="w-5"
                    icon={faStar}
                    color="#e69d3f"
                />
            );
        }
        return initial;
    }, [product.stars]);

    const liked = useSelector(state =>
        state.user.likedProducts.find(liked => liked.id === product.id)
    );

    function handleCart() {
        if (isSelected) return dispatch(removeFromCartRequest(product.id));
        return dispatch(addToCartRequest(product));
    }

    function handleLike() {
        dispatch(likeProductRequest(product));
    }

    return (
        <Layout>
            <motion.div
                className={`product-details h-screen px-12 py-8 flex flex-col ${error &&
                    'justify-center items-center'}`}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {error ? (
                    <span className="text-xl text-center">
                        {' '}
                        <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            color="red"
                        />{' '}
                        There was an error while consulting the products{' '}
                    </span>
                ) : (
                    <motion.div className="flex flex-col lg:grid grid-cols-2 h-full py-12 lg:py-0">
                        <div className="h-full flex flex-col">
                            <Link href="/">
                                <div className="cursor-pointer transition-shadows duration-300 hover:shadow shadow-lg mb-5 lg:mb-0  rounded-full text-gray-500 w-12 h-12 flex items-center justify-center p-8">
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        size="lg"
                                    />
                                </div>
                            </Link>
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                aria-label={product.name}
                                title={product.name}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ delay: 0.2 }}
                                className="lg:my-12 mx-0 h-300 max-w-480 self-center"
                            />
                        </div>
                        <motion.div
                            variants={stagger}
                            className="h-full flex flex-col justify-between pr-8"
                        >
                            <motion.header
                                initial="fadeup"
                                animate="normal"
                                exit="exit"
                            >
                                <motion.h1
                                    variants={fadeUp}
                                    className="text-2xl mb-2 text-gray-800 font-bold"
                                >
                                    {product.name}
                                </motion.h1>
                                <motion.div
                                    variants={fadeUp}
                                    className="flex flex-row"
                                >
                                    {stars}{' '}
                                    <span className="ml-2 font-light text-yellow-burn">
                                        1540 reviews
                                    </span>
                                </motion.div>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-md text-gray-500 mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            </motion.header>
                            <motion.footer
                                variants={fadeUp}
                                initial="fadeup"
                                animate="normal"
                                exit="exit"
                                className="flex flex-col lg:flex-row w-full justify-between  pt-5 pb-8"
                            >
                                <div className="flex flex-col">
                                    <span className="text-gray-500">
                                        Best price
                                    </span>
                                    <strong className="text-3xl text-gray-800">
                                        ${product.price / 100}
                                    </strong>
                                </div>

                                <div className="flex flex-row items-center mt-5 lg:mt-0">
                                    <Button
                                        className="font-bold text-xl px-12 flex items-center justify-center lg:w-300 box-border"
                                        title="Add to cart"
                                        handleClick={handleCart}
                                    >
                                        {' '}
                                        {isSelected
                                            ? 'Remove from cart'
                                            : 'Add to cart'}
                                    </Button>
                                    <motion.button
                                        className="ml-5 border-none bg-none outline-none"
                                        type="button"
                                        title="Save to my list"
                                        onClick={handleLike}
                                        whileTap={{ y: -10 }}
                                    >
                                        {liked ? (
                                            <FontAwesomeIcon
                                                size="lg"
                                                icon={faHeart}
                                                className="text-blue-500 hover:text-blue-600 transition-colors duration-500"
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                size="lg"
                                                icon={faHeartRegular}
                                                className="text-blue-500 hover:text-blue-600 transition-colors duration-500"
                                            />
                                        )}
                                    </motion.button>
                                </div>
                            </motion.footer>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </Layout>
    );
}

Details.getInitialProps = async ({ query }) => {
    const { productId } = query;

    try {
        const productSnapshot = await database
            .ref(`products/${productId}`)
            .once('value');
        return { product: productSnapshot.val() };
    } catch (err) {
        return { error: { message: 'Product not found', data: err } };
    }
};

Details.defaultProps = {
    error: null,
};

Details.propTypes = {
    product: PropTypes.shape().isRequired,
    error: PropTypes.shape(),
};
