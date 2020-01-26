import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occured on the server`
                : `An error ocurred on client`}
        </p>
    );
}

Error.propTypes = {
    statusCode: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number])
        .isRequired,
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};
