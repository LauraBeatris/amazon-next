import React from 'react';
import PropTypes from 'prop-types';
import Cart from '~/components/Cart';

export default function CheckoutLayout({ step, children }) {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-col lg:grid grid-cols-2 h-full">
                <div className="flex flex-col">
                    <h1 className="text-gray-800 mb-1 text-2xl font-bold pt-8">
                        {step.title}
                    </h1>
                    {children}
                </div>
                <div className="hidden lg:flex flex-col ml-4">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

CheckoutLayout.propTypes = {
    step: PropTypes.shape({
        title: PropTypes.string,
        order: PropTypes.number,
    }).isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
        .isRequired,
};
