import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Tag from '~/components/Tag';
import Button from '~/components/Button';

export default function Product({ product }) {
    const router = useRouter();
    const newProductData = { tags: [], ...product };
    const stars = useMemo(() => {
        const initial = [];
        for (let i = 1; i < product.stars; i++) {
            initial.push(<FontAwesomeIcon icon={faStar} color="yellow" />);
        }
        return initial;
    }, [product.stars]);

    function handleClick() {
        return router.push('/details');
    }

    return (
        <div className="flex flex-row rounded-lg max-w-400">
            <div>
                <img
                    src={newProductData.image}
                    alt={newProductData.name}
                    aria-label={newProductData.name}
                    className="max-w-200 max-h-200"
                />
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row mb-5">
                    {newProductData.tags.map(tag => (
                        <Tag name={tag} />
                    ))}
                </div>

                <strong className="text-xl text-gray-800">
                    {newProductData.name}
                </strong>

                <div className="flex flex-row">
                    <div>{stars}</div>

                    <div>
                        <span className="font-bold text-gray-800">$800.00</span>
                    </div>
                </div>

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
        name: PropTypes.string,
        url: PropTypes.string,
        tags: PropTypes.array,
        stars: PropTypes.number,
    }).isRequired,
};
