import React from 'react';
import Layout from '../components/layout';
import withAnalytics from '~/hocs/withAnalytics';

function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h2 className="bg-yellow-400 font-bold my-8 p-3 text-lg md:text-2xl">
                    Hi! Welcome to your first Next.js site.
                </h2>
            </div>
        </Layout>
    );
}

export default withAnalytics()(Home);
