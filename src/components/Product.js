import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Tag from '~/components/Tag';

export default function Product({ product }) {
    const stars = useMemo(() => {
        const initial = [];
        for (star of product.stars) {
            initial.push(<p> star </p>);
        }
        return initial;
    }, [product.stars]);

    return (
        <div className="flex flex-row rounded-lg shadow">
            <div>
                <img
                    src={product.url}
                    alt={product.name}
                    aria-label={product.name}
                />
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row mb-5">
                    {product.tags.map(tag => (
                        <Tag name={tag} />
                    ))}
                </div>

                <strong className="text-xl text-gray-800">
                    {product.name}
                </strong>

                <div className="flex flex-row">
                    <div>{stars}</div>

                    <div>
                        <span className="font-bold text-gray-800">$800.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        tags: PropTypes.array,
        stars: PropTypes.number,
    }).isRequired,
};
