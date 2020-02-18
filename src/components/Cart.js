import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import formatMoney from '~/helpers/formatMoney';

import { removeFromCartRequest } from '~/store/modules/cart/actions';

export default function Cart({ products }) {
    const dispatch = useDispatch();
    const formattedPrices = useMemo(() => {
        const totalCost = products.reduce((acc, { price }) => acc + price, 0);
        const productsCost = totalCost - 5000;
        return {
            totalCost: formatMoney(totalCost / 100),
            productsCost: formatMoney(productsCost / 100),
        };
    }, [products]);

    function deleteProduct(productId) {
        return dispatch(removeFromCartRequest(productId));
    }

    return (
        <div className="h-full bg-gray-200 flex flex-col justify-between">
            <div className="py-8 px-5">
                <h1 className="text-2xl font-bold text-gray-500">
                    You're Buying
                </h1>
            </div>
            {products && products.length > 0 ? (
                <ul className="flex flex-grow flex-col w-full px-5 pb-8">
                    {products &&
                        products.map(product => (
                            <li className="flex flex-row items-center justify-between cursor-pointer">
                                <Link href={`/details?productId=${product.id}`}>
                                    <a className="flex flex-row items-center">
                                        <img
                                            className="w-80 p-2 rounded"
                                            src={product.image}
                                            alt={product.name}
                                            aria-label={product.name}
                                            title={product.name}
                                        />
                                        <strong className="mb-3 transition-colors duration-300 text-gray-700 hover:text-gray-800">
                                            {product.name}
                                        </strong>
                                    </a>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => deleteProduct(product.id)}
                                    className="mb-3 border-none outline-0 bg-none cursor-pointer transition-colors duration-300 text-gray-700 hover:text-gray-800"
                                >
                                    <FontAwesomeIcon icon={faTrash} size="sm" />
                                </button>
                            </li>
                        ))}
                </ul>
            ) : (
                <strong className="text-gray-700 text-center">
                    Empty cart
                </strong>
            )}
            <div className="flex flex-col bg-gray-300 p-5">
                <ul className="w-full">
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Count{' '}
                        <span className="text-gray-800">{products.length}</span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Cost{' '}
                        <span className="text-gray-800">
                            {products.length
                                ? formattedPrices.productsCost
                                : '$0.00'}
                        </span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-4">
                        Shipping Cost{' '}
                        <span className="text-gray-800">
                            {products.length ? '$50' : '$0.00'}
                        </span>
                    </li>
                    <li className="flex flex-row justify-between text-xl text-gray-600 mb-4">
                        Total Cost{' '}
                        <strong className="text-gray-800">
                            {formattedPrices.totalCost}
                        </strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
