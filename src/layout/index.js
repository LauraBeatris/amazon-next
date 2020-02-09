import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import LateralMenu from './LateralMenu';

export default function Layout({ children }) {
    return (
        <div className="layout-menu lg:overflow-y-hidden overflow-scroll">
            <LateralMenu />
            <Header />
            <div className="h-screen w-screen flex flex-col justify-start lg:px-8 px-2 py-5">
                {children}
            </div>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
};
