import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Layout from '~/layout';
import withAnalytics from '~/hocs/withAnalytics';
import ProductList from '~/components/Slider';

function Home({ productList, error }) {
    const [showErrorMessage, setErrorMessage] = useState(!!error);

    return (
        <Layout>
            {!showErrorMessage && Object.keys(productList).length > 0 ? (
                <div className="w-full py-16">
                    <div className="mb-8 w-full">
                        <h2 className="text-2xl mb-2 lg:px-8 px-0 text-gray-800 font-bold">
                            {' '}
                            Computers and Accessories{' '}
                        </h2>
                        <ProductList
                            type="computersAndAccessories"
                            productList={productList}
                        />
                    </div>
                    <div className="w-full my-8">
                        <h2 className="text-2xl mb-2 lg:px-8 px-0 text-gray-800 font-bold">
                            {' '}
                            Video Games{' '}
                        </h2>
                        <ProductList
                            type="videoGames"
                            productList={productList}
                        />
                    </div>

                    <div className="w-full pb-5">
                        <h2 className="text-2xl mb-2 lg:px-8 px-0 text-gray-800 font-bold">
                            {' '}
                            Amazon Top Sellers{' '}
                        </h2>
                        <ProductList
                            type="topSellers"
                            productList={productList}
                        />
                    </div>
                </div>
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

Home.getInitialProps = async ({ req }) => {
    try {
        const response = await api.get('/products');
        const products = response.data;

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
        console.log(err);
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
