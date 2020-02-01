import React from 'react';
import PropTypes from 'prop-types';

import Product from '~/components/Product';
import Slider from '~/components/Slider';

export default function ProductList({ productList, type }) {
    return (
        <div className="flex flex-row my-4">
            {/* <Slider> */}
            {productList[type].map(product => (
                <Product product={product} />
            ))}
            {/* </Slider> */}
        </div>
    );
}

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
};
