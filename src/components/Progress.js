import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function Progress({ width, order }) {
    return (
        <div className="meter animate flex items-center h-2 relative bg-gray-800 p-2 shadow-inner rounded-lg">
            <span
                className="block h-2 relative overflow-hidden"
                style={{ width }}
            >
                <span />
            </span>
        </div>
    );
}

Progress.propTypes = {
    width: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
};
