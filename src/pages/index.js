import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Layout from '~/layout';
import withAnalytics from '~/hocs/withAnalytics';

function Home({ productList, error }) {
    const [showErrorMessage, setErrorMessage] = useState(!!error);

    return (
        <Layout>
            <div
                className={`h-full flex py-5 px-12 flex-col ${
                    showErrorMessage
                        ? 'justify-center items-center'
                        : 'justify-start items-start'
                }  overflow`}
            >
                {!showErrorMessage && Object.keys(productList).length > 0 ? (
                    <>
                        <div className="mb-5 w-full">
                            <h2 className="text-2xl text-gray-800 font-bold overflow-scroll">
                                {' '}
                                Computers and Accessories{' '}
                            </h2>
                            {productList.computersAndAccessories.map(
                                product => (
                                    <p> product </p>
                                )
                            )}
                        </div>
                        <div className="mb-5">
                            <h2 className="text-2xl text-gray-800 font-bold">
                                {' '}
                                Video Games{' '}
                            </h2>
                            {productList.videoGames.map(product => (
                                <p> product </p>
                            ))}
                        </div>

                        <div className="mb-5">
                            <h2 className="text-2xl text-gray-800 font-bold">
                                {' '}
                                Amazon Top Sellers{' '}
                            </h2>
                            {productList.topSellers.map(product => (
                                <p> product </p>
                            ))}
                        </div>
                    </>
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
            </div>
        </Layout>
    );
}

Home.getInitialProps = async () => {
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

export default withAnalytics()(Home);
