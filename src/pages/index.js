import React from 'react';
import Layout from '~/layout';
import withAnalytics from '~/hocs/withAnalytics';

function Home() {
    return (
        <Layout>
            <div className="flex py-5 px-12 flex-col items-start justify-center overflow">
                <div className="mb-5 w-full">
                    <h2 className="text-2xl text-gray-800 font-bold overflow-scroll">
                        {' '}
                        Computers and Accessories{' '}
                    </h2>
                </div>

                <div className="mb-5">
                    <h2 className="text-2xl text-gray-800 font-bold">
                        {' '}
                        Video Games{' '}
                    </h2>
                </div>

                <div className="mb-5">
                    <h2 className="text-2xl text-gray-800 font-bold">
                        {' '}
                        Amazon Top Sellers{' '}
                    </h2>
                </div>
            </div>
        </Layout>
    );
}

export default withAnalytics()(Home);
