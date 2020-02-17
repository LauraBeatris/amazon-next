import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Cart({ products }) {
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
                            <Link href={`/details?productId=${product.id}`}>
                                <li className="flex flex-row items-center cursor-pointer">
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
                                </li>
                            </Link>
                        ))}
                </ul>
            ) : (
                <strong className="text-gray-700">Empty cart</strong>
            )}
            <div className="flex flex-col bg-gray-300 p-5">
                <ul className="w-full">
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Count <span className="text-gray-800">8</span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-2">
                        Products Cost{' '}
                        <span className="text-gray-800">$8,110</span>
                    </li>
                    <li className="flex flex-row justify-between text-gray-600 mb-4">
                        Shipping Cost <span className="text-gray-800">$50</span>
                    </li>
                    <li className="flex flex-row justify-between text-xl text-gray-600 mb-4">
                        Total Cost{' '}
                        <strong className="text-gray-800">$8,160</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
