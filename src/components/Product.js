import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

export default function Product({ product }) {
    const router = useRouter();
    const newProductData = { tags: [], ...product };

    const stars = useMemo(() => {
        const initial = [];
        for (let i = 1; i < product.stars; i += 1) {
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

    function handleClick() {
        return router.push({
            pathname: '/details',
            query: { productId: product.id },
        });
    }

    return (
        <div className="h-180 flex flex-row lg:mr-8 mr-0 rounded-lg max-w-500">
            <div className="flex items-center">
                <img
                    src={newProductData.image}
                    alt={newProductData.name}
                    aria-label={newProductData.name}
                    className="w-140 max-h-200"
                />
            </div>

            <div className="flex flex-col justify-between ml-3">
                <strong className="max-w-240 truncate text-xl text-gray-800">
                    {newProductData.name}
                </strong>

                <div className="flex flex-row">
                    <div>
                        <span className="font-bold text-gray-800">
                            ${product.price / 100}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row">{stars}</div>

                <Button
                    handleClick={handleClick}
                    title="Click to see more details about this product"
                >
                    {' '}
                    More details{' '}
                </Button>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string,
        tags: PropTypes.array,
        stars: PropTypes.number,
        price: PropTypes.number,
    }).isRequired,
};
