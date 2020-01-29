import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import LateralMenu from './LateralMenu';

export default function Layout({ children }) {
    return (
        <div className="layout-menu">
            <LateralMenu />
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
};
